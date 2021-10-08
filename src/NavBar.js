import Form from "./Form"
import {useState} from 'react'
function NavBar({liked}){
    const [isvisible, setisvisible] = useState(false)
   // const [fav, setfav] = useState(liked)
    function click(e){
         e.preventDefault()
        setisvisible(isvisible => !isvisible)
    }
     function myFavs(){
       //setfav(fav => !fav)
     }
return(
    
        <div class="hey">

          <ul class="nav">
            <div class="hi">
            <li ><a class="nav-item" href=" ">Home</a></li>
            <li><a  class="nav-item"href=" ">About</a></li>
            <li><a onClick={myFavs} href=" ">Favorite</a></li>
            </div>
            <div class="hey">
             <li><a class="nav-item" onClick={click} href=" "> Add New Recipe </a>{isvisible ? <Form />: null}</li>
             </div>
          </ul>
        </div>
)
}

export default NavBar