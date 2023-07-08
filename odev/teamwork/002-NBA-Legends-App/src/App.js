import CardContainer from "./components/CardContainer";
import Header from "./components/Header";
// import PlayerCard from "./components/PlayerCard"
import {data} from "./helper/data";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <CardContainer data={data}/>
      
    </div>
  )
}

export default App
