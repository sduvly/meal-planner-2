import {useState} from 'react'
import React from 'react'
function Form(props){
const [isform, setisform] = useState({
    Meal: "",
    Category: "",
    Area: "",
    Instructions: "",
    MealThumb: "",
    Video: "",
    Ingredient: "",
    Source: ""
}

)
function handleChange(e){
    //e.preventDefault()
    setisform({...isform, [e.target.name]: e.target.value})
    console.log(e.target.name)
}
function handleSubmit(e){
    e.preventDefault()
console.log(e)
fetch("http://localhost:3001/meals", {
    method:"POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(isform)
})
.then(resp => resp.json())
.then(n => setisform(n))

}
return(
    <div>
    <form onSubmit={handleSubmit} className="new-poem-form">
      <input 
      placeholder="Meal"
      name="Meal"
      onChange={handleChange} 
      value={props.isform} 
      />
      <input 
      placeholder="Category"
      name="Category"
      onChange={handleChange}  
      value={props.isform}  
      />
      <input 
      placeholder="Area"
      name="Area"
      onChange={handleChange}  
      value={props.isform} 
      />
      <textarea 
      placeholder="Instructions..."
      name="Instructions" 
      
      onChange={handleChange} 
      value={props.isform}  
      />
      <input 
      placeholder="Image"
      name="Image"
      onChange={handleChange}  
      value={props.isform}  
      />
      <input 
      placeholder="Video" 
      name="Video"
      onChange={handleChange} 
      value={props.isform}  
      />
      <textarea 
      placeholder="Ingredients..." 
      name="Ingredients"
        
      onChange={handleChange}
      value={props.isform} 
      />
      <input 
      placeholder="Articles"
      name="Articles"
      onChange={handleChange}  
      value={props.isform}  
      />
      <input 
      type="submit" 
      value="Share your Recipe"
      onChange={handleChange}  
      />
    </form>
    </div>
)
}

export default Form