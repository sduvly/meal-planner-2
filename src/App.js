import RecipeCard from "./RecipeCard"
import{useState, useEffect} from "react"

function App() {
  const [isrecipe, setIsrecipe] = useState([])
  useEffect(() => {
    fetch("www.themealdb.com/api/json/v1/1/search.php?f=a")
    .then(resp => resp.json())
    .then(data => console.log(data))
  })
  return (

    <div className="App">
     
     <RecipeCard />
    </div>
    
    

  );
}

export default App;
