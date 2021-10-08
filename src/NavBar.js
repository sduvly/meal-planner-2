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
    
        <div class="hey">

<<<<<<< HEAD
          <ul className="nav">
            <li ><Link to={"/Home"} className="nav-item" href=" ">Home</Link></li>
            <li><a  className="nav-item"href=" ">About</a></li>
           
           
            <li><Link to={'/Favorite'} onClick={myFavs} href=" ">Favorite</Link></li>
           
           
             <li ><Link to={"/recipes/form"} href=" " className="nav-item" onClick={click} > Add New Recipe {isvisible ?  <Form />: null}  </Link></li>
             
            
=======
          <ul class="nav">
            <div class="hi">
            <li ><a class="nav-item" href=" ">Home</a></li>
            <li><a  class="nav-item"href=" ">About</a></li>
            <li><a onClick={myFavs} href=" ">Favorite</a></li>
            </div>
            <div class="hey">
             <li><a class="nav-item" onClick={click} href=" "> Add New Recipe </a>{isvisible ? <Form />: null}</li>
             </div>
>>>>>>> 1a59d7c1d8186609235ac7be4548eee3b047ca58
          </ul>
        </div>
)
}

export default NavBar