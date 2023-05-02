import { useParams } from 'react-router-dom';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react";
import {API} from "./global";

export function Moviedetails() {
  let { id1 } = useParams();
  //let details=movies[id1];
  let navigation=useNavigate(-1);

  const [movie,setMovie]=useState({})

  useEffect(()=>{
    fetch(`${API}/movies/${id1}`,{
      method:"GET"
    }).then((data)=>data.json()).then((data1)=>setMovie(data1));

  },[]);
  return (
    <div className='Details1'>
      <iframe 
      width="100%" 
      height="606" 
      src={movie.trailer}
      frameBorder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
      </iframe>
      <p></p>
      <Button className="back-button" variant="contained" color="primary" onClick={()=>navigation(-1)}><ArrowBackIosIcon />Back</Button>
      <h1>{movie.name}</h1>
      <p>{movie.summary}</p>
    </div>
  );
}
