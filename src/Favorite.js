
function Favorite({islike,  isrecipe}){
return(
      <>
      {isrecipe.filter(re => console.log(re === islike))}
      </>
)
}
export default Favorite