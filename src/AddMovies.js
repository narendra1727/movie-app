import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { API } from './global';
export function AddMovies({ movies, setMovies }) {
  let [moviename, setMoviename] = useState('');
  let [movieposter, setMovieposter] = useState('');
  let [movierating, setMovierating] = useState("");
  let [moviesummary, setMoviesummary] = useState("");
  let [movietrailer, setMovietrailer] = useState("");


  let navigateto = useNavigate();
  let newmovie = {
    name: moviename,
    poster: movieposter,
    rating: movierating,
    summary: moviesummary,
    trailer: movietrailer,
  };

  return (
    <div className="input-boxes">
      <TextField label="Name" variant="filled" onChange={(event) => setMoviename(event.target.value)} />
      <TextField label="Poster" variant="filled" onChange={(event) => setMovieposter(event.target.value)} />
      <TextField label="Rating" variant="filled" onChange={(event) => setMovierating(event.target.value)} />
      <TextField label="Summary" variant="filled" onChange={(event) => setMoviesummary(event.target.value)} />
      <TextField label="Trailer" variant="filled" onChange={(event) => setMovietrailer(event.target.value)} />
      <Button variant="contained" onClick={() => {
        fetch(`${API}/movies`,{
          method:"POST",
          body: JSON.stringify(newmovie),
          headers:{ "Content-type":"application/json"}
        }).then((data)=> {data.json();navigateto("/MoviesList")});
        
      }}>Add Movie</Button>

    </div>
  );
}
