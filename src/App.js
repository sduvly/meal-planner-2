import RecipeCard from "./RecipeCard"
import{useState, useEffect} from "react"

function App() {
  const [isrecipe, setIsrecipe] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/meals")
    .then(resp => resp.json())
    .then(data => {console.log(data)
      setIsrecipe(data)
    })
  }, [])

  return (

    <div className="App">
     
     <RecipeCard isrecipe={isrecipe}/>
    </div>
    
    

  );
}

export default App;
