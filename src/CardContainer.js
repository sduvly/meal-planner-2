import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"

import NavBar from "./NavBar"
function CardContainer({isrecipe, isSearch, setIsSearch}){
    let mySearch = isrecipe.filter(s => s.Area.toLowerCase().includes(isSearch))
    return(
        <>
      
        <NavBar />
        <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/>
        {mySearch.map(r => <RecipeCard key={r.id} meal={r.Meal} category={r.Category} area={r.Area} instructions={r.Instructions} mealthumb={r.MealThumb} video={r.Video} ingredient={r.Ingredient} source={r.Source}/>)}
        
        </>
        )
}

export default CardContainer