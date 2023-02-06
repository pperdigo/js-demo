import './App.css';
import app from './QlikConnection';
import PieChart from './PieChart';

function App() {
  return (
    <div className="App">
      <PieChart
        app = {app}
      ></PieChart>
    </div>
  );
}

export default App;
