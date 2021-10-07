
function SearchBar({isSearch, setIsSearch}){
    
    function searchMeal(e){
        console.log(e.target.value)
        setIsSearch(e.target.value)
    }
return (<div class="search">
    <input 
            type="text" 
            placeholder="Country name...." 
            name="search"
            onChange={searchMeal}
            value={isSearch}
    />
   
    </div>
    
)
}

export default SearchBar