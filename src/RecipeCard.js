import {useState} from 'react'
import ReactPlayer from "react-player";
import Favorite from './Favorite';

function RecipeCard({meal, category, area, instructions, mealthumb, video, ingredient, source, isrecipe}){
  const [isvis, setisvis] = useState(false)
  const [islike, setislike] =  useState(true)
  function newClick(e){
    console.log(e);
    setisvis(isvis => !isvis)
  }
  function likeBtn(e){
  console.log(e)
  setislike(!islike)
  }

  function dislikeBtn(e){
    console.log(e)
  }
return(
  
  <div>
   <div class="row">
   <h2>{meal}</h2>
   </div>
   <h4>{area}</h4>
   <div>
  <img width="350" height="200" src={mealthumb} alt="" />
  </div>
  
  
  <div>
  { isvis ? <><h3>Category: {category}</h3>
           <p> {instructions}</p>
           <ReactPlayer width="350" height="400" url={video}/>
           <p>{ingredient}</p>
           <button onClick={likeBtn}className="emoji-button like">👍🏾</button>
           <button onClick={dislikeBtn}className="emoji-button delete">👎🏾</button>
           <a href={source} target="_blank" rel="noreferrer">{source}
           </a></>
           : null}  
           <Favorite islike={islike}  isrecipe={isrecipe}/>

</div>
  </div>
)
}
export default RecipeCard;