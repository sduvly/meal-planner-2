
import ReactPlayer from "react-player";

function RecipeCard({meal, category, area, instructions, mealthumb, video, ingredient, source}){
return(
  <>
  <h2>{meal}</h2>
  <img width="350" height="200" src={mealthumb} alt="" />
  <h3>Category: {category}</h3>
  <h4>{area}</h4>
  <p>{instructions}</p>
   
      <ReactPlayer
      width="350" height="200"
        url={video}
      />
     <p>{ingredient}</p>
     <a href={source} target="_blank">{source}</a>
  </>
)
}
export default RecipeCard;