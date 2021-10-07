import Form from "./Form"
import {useState} from 'react'
function NavBar({liked}){
    const [isvisible, setisvisible] = useState(false)
    const [fav, setfav] = useState(liked)
    function click(e){
         e.preventDefault()
        setisvisible(isvisible => !isvisible)
    }
    function myFavs(){
       setfav(fav => !fav)
    }
return(
    
        <div>
          <ul id="nav">
            <li><a href=" ">Home</a></li>
            <li><a href=" ">About</a></li>
            <li><a onClick={myFavs} href=" ">Favorite</a></li>
             <li><a onClick={click} href=" "> Add New Recipe </a>{isvisible ? <Form />: null}</li>
          </ul>
        </div>
)
}

export default NavBar