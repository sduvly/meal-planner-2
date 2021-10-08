import Form from "./Form"
import {useState} from 'react'
import {Route, Link, Switch} from 'react-router-dom'

function NavBar(){
    const [isvisible, setisvisible] = useState(false)
   const [fav, setfav] = useState("")
    function click(e){
         e.preventDefault()
        setisvisible(isvisible => !isvisible)
    }
     function myFavs(){
       setfav(!fav)
     }
return(
    
        <div>

          <ul className="nav">
            <li ><Link to={"/Home"} className="nav-item" href=" ">Home</Link></li>
            <li><a  className="nav-item"href=" ">About</a></li>
           
           
            <li><Link to={'/Favorite'} onClick={myFavs} href=" ">Favorite</Link></li>
           
           
             <li ><Link to={"/recipes/form"} href=" " className="nav-item" onClick={click} > Add New Recipe {isvisible ?  <Form />: null}  </Link></li>
             
            
          </ul>
        </div>
)
}

export default NavBar