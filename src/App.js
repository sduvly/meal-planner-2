import Favorite from "./Favorite"
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


    <div class="app" >
      <header >
        <div className="header" >
          <h1>INTERNATIONAL MEALS AND RECIPES </h1>
          <NavBar  class="nav"/>
        </div>
      </header>
     <section>
     <div>
     <CardContainer addToFavorite={addToFavorite} isSearch={isSearch} setIsSearch={setIsSearch} isrecipe={isrecipe}/>
     <Favorite favoriteRecipes={favoriteRecipes}/> 
     
    </div>
    </section>

    </div>
    
    

  );
}

export default App;
