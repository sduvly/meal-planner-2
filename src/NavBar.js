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
          <ul id="nav">
            <li><a href=" ">Home</a></li>
            <li><a href=" ">About</a></li>
            <li><a href=" ">Favorite</a></li>
             <li><a onClick={click} href=" "> Add New Recipe </a>{isvisible ? <Form />: null}</li>
          </ul>
        </div>
)
}

export default NavBar