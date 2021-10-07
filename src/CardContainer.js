import SearchBar from "./SearchBar"
import RecipeCard from "./RecipeCard"

import NavBar from "./NavBar"
function CardContainer({isrecipe, isSearch, setIsSearch, addToFavorite}){
    let mySearch = isrecipe.filter(s => s.Area.toLowerCase().includes(isSearch))
    return(
        <>
      
        <NavBar />
        <SearchBar isSearch={isSearch} setIsSearch={setIsSearch}/>
        {mySearch.map(r => <RecipeCard key={r.id} recipe={r} addToFavorite={addToFavorite} />)}
        
        </>
        )
}

export default CardContainer