import Form from "./Form"
import {useState} from 'react'
import {Link} from 'react-router-dom'

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
            <li ><a className="nav-item" href=" ">Home</a></li>
            <li><a  className="nav-item"href=" ">About</a></li>
            <li><a onClick={myFavs} href=" ">Favorite</a></li>
             <li ><Link to={"/form"} href=" " className="nav-item" onClick={click} > Add New Recipe {isvisible ?  <Form />: null}  </Link></li>
          
          </ul>
        </div>
)
}

export default NavBar