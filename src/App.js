
import{useState, useEffect} from "react"
import CardContainer from "./CardContainer"

function App() {
  const [isrecipe, setIsrecipe] = useState([])
  const [isSearch, setIsSearch] = useState('')
  
  useEffect(() => {
    fetch("http://localhost:3001/meals")
    .then(resp => resp.json())
    .then(data => {
      console.log(data)
      setIsrecipe(data)
    })
  }, [])
  
  return (
    <div className="App">
     <h1>INTERNATIONAL MEALS AND RECIPES </h1>
     <CardContainer isSearch={isSearch} setIsSearch={setIsSearch} isrecipe={isrecipe}/>
      
    </div>
    
    

  );
}

export default App;
