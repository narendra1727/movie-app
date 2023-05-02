import { Counter } from './Counter';
import { useState,useEffect } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { useNavigate } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import { names } from './App';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function Movies({ movie, id,setMovies,movies,deleteButton,editbutton }) {
  let styles = { color: movie.rating > 7 ? "green" : "red" };
  let [desc, setDesc] = useState(true);
  let dstyles = { display: desc ? "block" : "none" };
  let navigate = useNavigate();
  return (
    <Card className="Movie-card">
      <img className="Poster" src={movie.poster} alt={movie.name} />
      <CardContent>
        <div className="rating">
          <h3 className='Movie-name'>{movie.name} <IconButton color="primary" onClick={() => setDesc(!desc)}>{desc ? <ExpandMoreIcon /> : <ExpandLessIcon />}</IconButton><IconButton color="primary" onClick={() =>navigate(`/moviedetails/${id}`)}><InfoIcon /></IconButton></h3>
          <p className='Movie-rating' style={styles}><b>⭐ {movie.rating}</b></p>
        </div>
        <p className="Description" style={dstyles}>{movie.summary}</p>
      </CardContent>
      <CardActions className='counter-icons'>
        <Counter />
        <div>
          {/* <IconButton color="primary" onClick={()=>navigate(`/Editmovie/${id}`)}><EditIcon /></IconButton> */}
          {/* <IconButton color="error" onClick={()=>{
            console.log(id);
            movies.splice(id,1);
            setMovies([...movies]);
          }}><DeleteIcon /></IconButton> */}
          {editbutton}
          {deleteButton}
        </div>
      </CardActions>
    </Card>
  );
};

