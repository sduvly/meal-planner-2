import {useState} from 'react'
import ReactPlayer from "react-player";

function RecipeCard({meal, category, area, instructions, mealthumb, video, ingredient, source}){
  const [isvis, setisvis] = useState(false)
  function newClick(e){
    console.log(e);
    setisvis(isvis => !isvis)
  }
return(
  
  <>
   
   <h2 onClick={newClick}>{meal}</h2>
  <img width="350" height="200" src={mealthumb} alt="" />
  <h4>{area}</h4>
  
  {isvis ? <h3>Category: {category}</h3> +
  <p> {instructions}</p> +
  <ReactPlayer width="350" height="200" url={video}/> +
  <p>{ingredient}</p> +
  <a href={source} target="_blank" rel="noreferrer">{source}</a> : null}

  </>
)
}
export default RecipeCard;