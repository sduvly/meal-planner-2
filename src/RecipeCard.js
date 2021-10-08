import {useState} from 'react'
import ReactPlayer from "react-player";
import Favorite from './Favorite';

function RecipeCard({recipe, addToFavorite, favoriteRecipes}){
  const [isvis, setisvis] = useState(false)
  const [liked, setliked] = useState([recipe])
  
  function newClick(e){
    console.log(e);
    setisvis(isvis => !isvis)
    
  }
  function likeBtn(){
    addToFavorite(recipe)
    
    setliked(liked => !liked)
    
  }
  
return(
  <div>
   <div className="row">
   <h2 >Meal: {recipe.Meal}</h2>
   </div>
   <h1>Country: {recipe.Area}</h1>
   <div>
   <img  onClick={newClick} width="350" height="300" src={recipe.MealThumb} alt="" />
  </div>
  <div>
  { isvis ? <><h3>Category: {recipe.Category}</h3>
          <p> {recipe.Instructions}</p>
          <ReactPlayer width="350" height="400" url={recipe.Video}/>
          <p>{recipe.ingredient}</p>
          {liked ? <button onClick={likeBtn}className="emoji-button like">👍🏾</button> : null}
          <a href={recipe.Source} target="_blank" rel="noreferrer">{recipe.Source}
         
           </a></>
           : null}  
            <Favorite liked={liked} favoriteRecipes={favoriteRecipes}/>
</div>
  </div>
    )
      }
export default RecipeCard;