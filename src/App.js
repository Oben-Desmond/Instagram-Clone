import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import SideColumn from './components/SideColumn.jsx';
import MainColumn from './components/MainColumn';

function App() {


  return (
    <div className="App">
      <div className="row">
        <SideColumn></SideColumn>
        <MainColumn></MainColumn>
      </div>
    </div>
  );
}

export default App;
