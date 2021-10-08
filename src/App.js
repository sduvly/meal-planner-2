
import{useState, useEffect} from "react"
import CardContainer from "./CardContainer"
import NavBar from "./NavBar"

function App() {
  const [isrecipe, setIsrecipe] = useState([])
  const [favoriteRecipes, setFavoriteRecipes] = useState([])
  const [isSearch, setIsSearch] = useState('')
  

  function addToFavorite(recipe){
    const newFavs = [...favoriteRecipes, recipe]
    setFavoriteRecipes(newFavs)
  }

 console.log("FAVS", favoriteRecipes);

  useEffect(() => {
    fetch("http://localhost:3001/meals")
    .then(resp => resp.json())
    .then(data => {
      //console.log(data)
      setIsrecipe(data)
    })
  }, [])
  
  return (
    <div className="app" >
      <header >
        <div className="header" >
          <h1>INTERNATIONAL MEALS AND RECIPES </h1>
          <NavBar  class="nav"/>
        </div>
      </header>
     <section>
     <div> 
     <CardContainer favoriteRecipes={favoriteRecipes} addToFavorite={addToFavorite} isSearch={isSearch} setIsSearch={setIsSearch} isrecipe={isrecipe} />
     
    </div>
    </section>
   
     </div>
  );
}

export default App;


