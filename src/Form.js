import {useState} from 'react'
import React from 'react'
import styled from 'styled-components'
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
    <FormContainer>
        <form onSubmit={handleSubmit } className="new-recipe-form">
            <InputBox>
                <span class="Details">Name</span>
                <input 
                placeholder="Enter Dish Name..."
                name="Meal"
                onChange={handleChange} 
                value={props.isform} 
                required />
            </InputBox> 
            <InputBox>
                <span class="Details"> Category </span>
                <input 
                placeholder="Category"
                name="Category"
                onChange={handleChange}  
                value={props.isform}  
                required/>
            </InputBox>
            <InputBox>
                <span class="Details"> Country </span>
                <input 
                placeholder="Enter Country Name..."
                name="Area"
                onChange={handleChange}  
                value={props.isform} 
                required/>
            </InputBox>
            <InputBox>
                <span class="Details"> Instructions</span>
                <textarea
                placeholder="Instructions..."
                name="Instructions" 
                onChange={handleChange} 
                value={props.isform}  
                required />
            </InputBox>
            <InputBox>
                <span class="Details"> Image </span>
                <input 
                placeholder="Image..."
                name="MealThumb"
                onChange={handleChange}  
                value={props.isform}  
                required/>
            </InputBox>
            <InputBox>
                <span class="Details"> Video</span>
                <input 
                placeholder="Video URL...." 
                name="Video"
                onChange={handleChange} 
                value={props.isform}  
                required/>
            </InputBox>
            <InputBox>
                <span class="Details"> Ingredient </span>
                <textarea 
                placeholder="Ingredients..." 
                name="Ingredient"
                onChange={handleChange}
                value={props.isform} 
                required/>
            </InputBox>
            <InputBox>
                <span class="Details"> Recipe</span>
                <input 
                placeholder="add URL..."
                name="Source"
                onChange={handleChange}  
                value={props.isform}  
                required/>
            </InputBox>
            <Button>
                <input 
                type="submit" 
                value="Share your Recipe"
                onChange={handleChange}  
                />
        
            </Button>
           
        </form>
        
    </FormContainer>
)
}

export default Form;

const FormContainer = styled.div`

margin-top: 50px;
padding: 0px;
box-sizing: border-box;
display: flex;
justify-content: flex-start;
align-items: center;
height: 50vh;
font-size: 18px;
//background: linear-gradient(135deg, #ff9966, #ff5e62);


`
const InputBox = styled.div`
display: flex;
width:(100% / 2 - 30px);
padding: 2px;
margin-bottom: 10px;
& input, textarea{
    height: 20px;
    width: 100%;
    outline: none;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 15px;
    border-bottom-width: 2px;
    transition: all 0.3s ease;
    border-color: #ff9966;
    
}

& span{
    align-items: center;
    padding-right:10px;
}


`

const Button = styled.div`

width:100%;
outline: none;
display: flex;
justify-content: center;
align-items: center;


& input{
font-size: 20px;
font-weight: 500;
color: black;
border-color: #ff9966;
border: none;
border-radius: 5px;
background: linear-gradient(135deg, #ff9966, #ff5e62);

}
& input:hover{
    background: linear-gradient(-135deg, #ff9966, #ff5e62); 
}


`