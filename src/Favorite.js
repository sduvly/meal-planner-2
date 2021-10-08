
function Favorite({liked, favoriteRecipes}){
return(
      <>
      {liked.filter(l => l === favoriteRecipes)}
      </>
)
}
export default Favorite