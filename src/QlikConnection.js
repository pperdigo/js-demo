const config = {
    host: 'localhost',
    prefix: '/',
    port: '4848',
    isSecure: false,
};

window.require.config({
    baseUrl: 'http://localhost:4848/resources',
    paths:{
        qlik: 'http://localhost:4848/resources/js/qlik',
    }
});

let appPromise = new Promise((resolve) => {
    window.require(["js/qlik"], (qlik) => {
        let app = qlik.openApp('Consumer Sales.qvf', config)
        resolve(app)
    })
})

export default appPromise
