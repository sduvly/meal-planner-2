import Form from "./Form"
import {useState} from 'react'
function NavBar(){
    const [isvisible, setisvisible] = useState(false)
    
    function click(e){
         e.preventDefault()
    
    setisvisible(isvisible => !isvisible)
    }
return(
    
        <div>
          <ul class="nav">
            <li ><a class="nav-item" href=" ">Home</a></li>
            <li><a  class="nav-item"href=" ">About</a></li>
            <li><a class="nav-item" href=" ">Favorite</a></li>
             <li><a class="nav-item" onClick={click} href=" "> Add New Recipe </a>{isvisible ? <Form />: null}</li>
          
          </ul>
        </div>
)
}

export default NavBar