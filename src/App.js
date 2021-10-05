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
     
      {isrecipe.map(r => <RecipeCard key={r.id}meal={r.Meal} category={r.Category} area={r.Area} instructions={r.Instructions} mealthumb={r.MealThumb} video={r.Video} ingredient={r.Ingredient} source={r.Source}/>)}
    </div>
    
    

  );
}

export default App;
