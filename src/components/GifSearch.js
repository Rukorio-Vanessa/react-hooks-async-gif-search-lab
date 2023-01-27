import React, {useState} from "react";


function GifSearch({onSubmit}){
    const [input,setInput]=useState("")
    const handleChange=(event)=>{
        setInput(event)
    }
    const Submit =(event)=>{
        event.preventDefault()
        onSubmit(input)
        
    }
return(
<div>
   <form>
    <h2 htmlFor="searchBar" >Search Gif</h2>
    <input  className="form-control" onChange={event=>handleChange(event.target.value)} />
    <button  className="btn btn-success" onClick={Submit}>Search</button>
   </form>
</div>
)
}

export default GifSearch