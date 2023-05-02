import  Movies  from './Movies';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { API } from './global';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';


export function Movielist() {
  let navigate1=useNavigate();
  const [movies,setMovies]=useState([]);
  const getMovies=()=>{ fetch(`${API}/movies`,{method:"GET"}).then((data)=> data.json()).then((movie)=>{setMovies(movie)})};
  useEffect(()=>{
    getMovies()
    // fetch(`${API}/movies`).then((data)=>data.json()).then((movie)=>setMovies(movie))
  },[]);
  
  return (
    <div className='Movies-List'>
      {movies.map((movie, i) => <Movies key={i} movie={movie} movies={movies} setMovies={setMovies} id={movie.id} 
      editbutton={
        <IconButton color="primary" onClick={()=>navigate1(`/Editmovie/${movie.id}`)}><EditIcon /></IconButton>
      }
      deleteButton={
        <IconButton color="error" onClick={()=>{
            fetch(`${API}/movies/${movie.id}`,{
              method:"DELETE"
            }).then(()=>getMovies());
            ;
          }}><DeleteIcon /></IconButton>
        }
      
      />)}
    </div>
  );
}
