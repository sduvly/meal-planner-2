
function Favorite({favoriteRecipes}){
return(
      <>
       
            {favoriteRecipes.map(r => 
            <>
             <h2 >{r.Meal}</h2>
             <h2>({r.Area})</h2>
            <img width="350" height="300" src={r.MealThumb} alt="" />
            </>
            )}
     
      </>
)
}
export default Favorite