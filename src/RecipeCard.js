import {useState} from 'react'
import ReactPlayer from "react-player";
import Favorite from './Favorite';
import NavBar from './NavBar';
function RecipeCard({recipe, addToFavorite}){
  const [isvis, setisvis] = useState(false)
  const [liked, setliked] = useState(recipe)

  

  function newClick(e){
    console.log(e);
    setisvis(isvis => !isvis)
  }
  function likeBtn(){
    addToFavorite(recipe)
    
    setliked(liked => !liked)
    // const newFavorites = addToFavorite.filter(like => console.log(like))
  }
  
return(
  <>
  <h2 >{recipe.Meal}</h2>
  <h1>{recipe.Area}</h1>
  <img  onClick={newClick} width="350" height="300" src={recipe.MealThumb} alt="" />
 { isvis ? <><h3>Category: {recipe.category}</h3>
           <p> {recipe.Instructions}</p>
           <ReactPlayer width="350" height="400" url={recipe.Video}/>
           <p>{recipe.ingredient}</p>
          {liked ? <button onClick={likeBtn}className="emoji-button like">👍🏾</button> : null}
           <a href={recipe.Source} target="_blank" rel="noreferrer">{recipe.Source}
           </a></>
           : null}  
           <Favorite liked={liked} />
           <NavBar liked={liked}/>
</>

)
}
export default RecipeCard;