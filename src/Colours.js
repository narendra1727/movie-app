import { useState } from "react";
import Button from '@mui/material/Button';


export function Colours() {
  let [inputdata,setInputdata]=useState("");
  let [data,setData]=useState([]);
  return (
    <div >
      <input type="text" value={inputdata} onChange={(event)=>setInputdata(event.target.value)}/>
      <Button variant="contained" className="colour-button" onClick={()=>{
        setData([...data,inputdata]);
        setInputdata("");
        }} >Add colour</Button>
        {data.map((val,i)=>{
          return <div key={i}><p className="Input1" style={{backgroundColor : val}} ></p></div>
        })}
    </div>
  );

}
