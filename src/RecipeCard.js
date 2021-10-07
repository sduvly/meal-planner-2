import {useState} from 'react'
import ReactPlayer from "react-player";

function RecipeCard({meal, category, area, instructions, mealthumb, video, ingredient, source}){
  const [isvis, setisvis] = useState(false)
  function newClick(e){
    console.log(e);
    setisvis(isvis => !isvis)
  }
return(
  
  <div>
   <div class="row">
   <h2 onClick={newClick}>{meal}</h2>
   <div>
  <img width="350" height="200" src={mealthumb} alt="" />
  </div>
  <h4>{area}</h4>
  </div>
  <div>
  {isvis ? <h3>Category: {category}</h3> +
  <p> {instructions}</p> +
  <ReactPlayer width="350" height="200" url={video}/> +
  <p>{ingredient}</p> +
  <a href={source} target="_blank" rel="noreferrer">{source}</a> : null}
</div>
  </div>
)
}
export default RecipeCard;