import React, {useState, useEffect} from "react";

function GifList({data}){
    const [List,setdata]=useState([])
    
    useEffect(()=>{
      if(data.length!==0){
      setdata(data)
      }
    },[data])

return(
    <div>
        <ul>{data.map((item,x)=>(
            <li key={x}>
                <img src={item.url} alt="loading gif" key={x}/>
            </li>
        ))}

        </ul>
    </div>
)
}

export default GifList