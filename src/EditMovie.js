import { useState,useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function EditMovie() {
  let { id3 } = useParams();
  let [updatemovie, setUpdatemovie] = useState(null);

  useEffect(()=>{
    fetch(`${API}/movies/${id3}`,{method:"GET"}).then((data)=>data.json()).then((data1)=>setUpdatemovie(data1));
  },[])
  return updatemovie ? <Editmovieform id3={id3} updatemovie={updatemovie}/> : "Loading....";
}


function Editmovieform({updatemovie,id3}){

  let navigate11 = useNavigate();
  let [updatename,setUpdatedname]=useState(updatemovie.name);
  let [updateposter,setUpdatePoster]=useState(updatemovie.poster);
  let [updaterating,setUpdaterating]=useState(updatemovie.rating);
  let [updatedescription,setUpdatedescription]=useState(updatemovie.summary);
  let [updatetrailer,setUpdatetrailer]=useState(updatemovie.trailer);


  return(
    <div className='Update-input-boxes'>
      <TextField  variant="filled" value={updatename} onChange={(event)=>setUpdatedname(event.target.value)}/>
      <TextField  variant="filled" value={updateposter} onChange={(event)=>setUpdatePoster(event.target.value)}/>
      <TextField  variant="filled" value={updaterating} onChange={(event)=>setUpdaterating(event.target.value)}/>
      <TextField  variant="filled" value={updatedescription} onChange={(event)=>setUpdatedescription(event.target.value)}/>
      <TextField  variant="filled" value={updatetrailer} onChange={(event)=>setUpdatetrailer(event.target.value)}/>
      <Button variant="contained" onClick={()=>{
        let newvalue={
          name:updatename,
          poster:updateposter,
          rating:updaterating,
          description:updatedescription,
          trailer:updatetrailer
        };
        fetch(`${API}/movies/${id3}`,{method:"PUT",body:JSON.stringify(newvalue),headers:{"Content-Type" : "application/json"}}).then((data)=>data.json()).then(()=>navigate11("/MoviesList"));
        
      }}>Update Movie details</Button>
    </div>
  )
}


export {EditMovie}