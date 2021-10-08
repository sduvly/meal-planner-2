import {useState} from 'react'
import ReactPlayer from "react-player";
import Favorite from './Favorite';
import styled from 'styled-components';

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
    const myLikedMeals = liked.filter(l => l === favoriteRecipes)
    console.log(liked)
  }
return(

  

  
   <RecipeCardContainer >

    <h2 >{recipe.Meal}</h2>
    <h2>({recipe.Area})</h2>
    <ImageContainer>
   <img  onClick={newClick} width="350" height="300" src={recipe.MealThumb} alt="" />
   </ImageContainer>
  
  { isvis ? <Details >
              
              <h3>Category: {recipe.Category}</h3>
              <p><strong>Ingredients:</strong>{recipe.Ingredient}</p>
              <p> <strong>Recipe:</strong> {recipe.Instructions}</p>
              <Video>
              <ReactPlayer  url={recipe.Video}/>
              </Video>
              <ButtonLike>
              {liked ? <button onClick={likeBtn}className="emoji-button like">Like ❤️</button> : null}
              <a href={recipe.Source} target="_blank" rel="noreferrer">Recipe Link</a>
              </ButtonLike>
            </Details>
           : null}
             
          
           

   </RecipeCardContainer>


)
}
export default RecipeCard;


const RecipeCardContainer = styled.div`

  flex-direction: row;
  float: left;
  align-items: center;
  

  font-family: 'Robato', sans-serif;  
  justify-content: space between;
  & h2{
    display: flex;
    flex-direction: row;
    float: left;
    padding: 5px;
  }

`
const ImageContainer =styled.div`

  display: block;
  width: 100%;
  margin: 20px;
  padding : 5px;
  opacity: 0.9;
  height: auto;
  
  transform: scale(1);
  transition: transform 1s, opacity 0.5s;
  & img:hover{
      opacity: 1;
    transform: scale(1.03);
    }
    
`
const Details = styled.div`
border: 2px solid brown;
}
font-family: 'Robato', sans-serif;

& h3{
  color: brown;
  font-size: 20px;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid brown;
}
& p{
  background-color:#FFFFFF;
  color: rgb(85,85,89);
  text-align: center;
  font-family: 'Cursive';
  font-size: 20px;
  
}

`
const Video = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
margin-left: auto;
margin-right: auto;
border: 2px solid black;
padding: 20px;
& img{
  border: 5px solid black;
  opacity: 0.1;
}
background-image:linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url("https://thumbs.dreamstime.com/b/plate-fork-knife-background-top-view-plate-fork-knife-wooden-background-top-view-170949504.jpg");
background-repeat: no-repeat;
background-size: cover;
background-position: ceter;
max-width: 100%;
  height: auto;

`

const ButtonLike = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;

padding : 20px;
& button{
  font-size: 15px;
}

`

