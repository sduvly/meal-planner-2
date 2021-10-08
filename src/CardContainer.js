import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"



function CardContainer({isrecipe, isSearch, setIsSearch, addToFavorite, favoriteRecipes}){

    let mySearch = isrecipe.filter(s => s.Area.toLowerCase().includes(isSearch))
    return(
        
        <div>
        <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/>
        {mySearch.map(r => <RecipeCard key={r.id} favoriteRecipes={favoriteRecipes} recipe={r} addToFavorite={addToFavorite} />)}
        </div>
        )
}

export default CardContainer