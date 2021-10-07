import {useState} from 'react'
import ReactPlayer from "react-player";
import Favorite from './Favorite';

function RecipeCard({recipe, addToFavorite}){
  const [isvis, setisvis] = useState(false)
  const [liked, setliked] =  useState(true)
  // eslint-disable-next-line no-unused-vars
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
 

  
  <div>
   <div class="row">
   <h2 >{recipe.Meal}</h2>
   </div>
   <h1>{recipe.Area}</h1>
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
            <Favorite liked={liked} />
           


</div>
  </div>
)
}
export default RecipeCard;