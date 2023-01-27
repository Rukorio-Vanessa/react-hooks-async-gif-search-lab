import React, {useState, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import GifSearch from "./GifSearch";
import GifList from "./GifList";


function GifListContainer(){
    const [data,setdata] = useState([])
    const [query, setQuery] = useState("dolphins")
    
    const API_KEY = "BTJ62ZJCnUKqTMOhS88cVWvlIgVb24k6"
    useEffect(()=>{
 
    
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${API_KEY}`)
    .then(data=>data.json())
    .then(({data})=>{
        const newGifs=data.map(gif=>({url:gif.images.original.url}))
        setdata(newGifs)  
    })
    },[query])

    return(
        <div className="list-container"  >
            <div className="search-div" >
                <GifSearch onSubmit={setQuery} />
            </div>
            <div className="list-div" >
                <GifList data={data} />
            </div>
        </div>
    )
}



export default GifListContainer