import { useEffect, useState } from "react"

const PieChart = (props) => {
    const [data, setData] = useState({})

    useEffect(()=>{
        
        const extractData = async() => {
            let app = await props.app
            let reply = await app.createCube({
                "qDimensions": [
                    {
                        "qLibraryId": "",
                        "qDef": {
                            "qFieldDefs": [
                            "Sales Rep Name"
                            ]
                        }
                    },
                    {
                        "qLibraryId": "",
                        "qDef": {
                            "qFieldDefs": [
                            "Product Group Desc"
                            ]
                        }
                    }
                ],
                "qMeasures": [
                    {
                        "qDef": {
                            "qDef": "Sum ([Budget Amount])/Sum ([Actual Amount])"
                        }
                    }
                ],
                "qInterColumnSortOrder": [
                    1,
                    0
                ],
                "qSuppressZero": false,
                "qSuppressMissing": true,
                "qInitialDataFetch": [
                    {
                    "qLeft": 0,
                    "qTop": 0,
                    "qWidth": 3,
                    "qHeight": 3000
                    }
                ]
            })

            return reply.layout.qHyperCube.qDataPages[0].qMatrix
        }

        const transformData = (extractData) => {
            /*
                extractData: [
                                [
                                    {"qText":"Carolyn Halmon","qNum":"NaN","qElemNumber":51,"qState":"O"},
                                    {"qText":"0.75369849149957","qNum":0.7536984914995684,"qElemNumber":0,"qState":"L"}
                                ],
                                [
                                    {"qText":"Donna Brown","qNum":"NaN","qElemNumber":53,"qState":"O"},
                                    {"qText":"1.0983187140631","qNum":1.0983187140631223,"qElemNumber":0,"qState":"L"}
                                ],
                                [
                                    {"qText":"Ronald Milam","qNum":"NaN","qElemNumber":37,"qState":"O"},
                                    {"qText":"5.9106283405972","qNum":5.910628340597185,"qElemNumber":0,"qState":"L"}
                                ],
                                [
                                    {"qText":"Kim Williams","qNum":"NaN","qElemNumber":34,"qState":"O"},
                                    {"qText":"1.9426454472778","qNum":1.942645447277761,"qElemNumber":0,"qState":"L"}
                                ]
                            ]
                ----------------------------------------------- X ------------------------------------------                            
                transformData: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
            */

            console.log('extraidos', extractData)
            let filteredData = extractData.filter((row)=>row[1].qText === 'Alcoholic Beverages')
            let transformData = filteredData.map((row) => {
                return {value: row[2].qNum, name: row[0].qText}
            })
            console.log('filtrados', filteredData)
            console.log('final', transformData)
            setData(transformData)
        }

        const transformDataAlt = (extractData) => {
            let filteredData = extractData.filter((row)=>row[1].qText === 'Alcoholic Beverages')
            let transformData = []
            filteredData.forEach((row) => {
                transformData.push({value: row[2].qNum, name: row[0].qText})
            })
            console.log('final alt', transformData)
            setData(transformData)
        }

        extractData().then((extractData) => {
            transformData(extractData)
            transformDataAlt(extractData)
        })
    }, [props.app])



    return <div>{JSON.stringify(data)}</div>
}

export default PieChart