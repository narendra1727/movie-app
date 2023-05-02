import logo from './logo.svg';
import './App.css';
import { Welcome } from './Welcome';
import { Colours } from './Colours';
import { useState,useEffect } from 'react';
import {Navigate,NavLink,Routes,Route,useNavigate,useParams} from "react-router-dom";
import { IconButton } from '@mui/material';
import { Moviedetails } from './Moviedetails';
import EditIcon from '@mui/icons-material/Edit';
import { AddMovies } from './AddMovies';
import { Pagenotfound } from './Pagenotfound';
import { Home } from './Home';
import { Movielist } from './Movielist';
import { EditMovie } from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { Counter } from './Counter';




let names=[
  {
    id: "100",
    name: "RRR",
    poster: "https://englishtribuneimages.blob.core.windows.net/gallary-content/2021/6/Desk/2021_6$largeimg_977224513.JPG",
    rating: 8.8,
    summary:
      "RRR is an upcoming Indian Telugu-language period action drama film directed by S. S. Rajamouli, and produced by D. V. V. Danayya of DVV Entertainments.",
    trailer: "https://www.youtube.com/embed/f_vbAtFSEc0"
  },
  {
    id: "101",
    name: "Iron man 2",
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 7,
    summary:
      "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
    trailer: "https://www.youtube.com/embed/wKtcmiifycU"
  },
  {
    id: "102",
    name: "No Country for Old Men",
    poster:
      "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    rating: 8.1,
    summary:
      "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
    trailer: "https://www.youtube.com/embed/38A__WT3-o0"
  },
  {
    id: "103",
    name: "Jai Bhim",
    poster:
      "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
    summary:
      "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
    rating: 8.8,
    trailer: "https://www.youtube.com/embed/nnXpbTFrqXA"
  },
  {
    id: "104",
    name: "The Avengers",
    rating: 8,
    summary:
      "Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
    poster:
      "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
    trailer: "https://www.youtube.com/embed/eOrNdBpGMv8"
  },
  {
    id: "105",
    name: "Interstellar",
    poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
    rating: 8.6,
    summary:
      "When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
  },
  {
    id: "106",
    name: "Baahubali",
    poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
    rating: 8,
    summary:
      "In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
    trailer: "https://www.youtube.com/embed/sOEg_YZQsTI"
  },
  {
    id: "107",
    name: "Ratatouille",
    poster:
      "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
    rating: 8,
    summary:
      "Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer: "https://www.youtube.com/embed/NgsQ8mVkN8w"
  }
];

function App() {
  let [movies,setMovies]=useState([...names]);
  let [mode,setMode]=useState('light');
  let [modetext,setModetext]=useState('Dark Mode')
  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  
  let navigate7=useNavigate();

  // useEffect(()=>{
  //   fetch("https://6321d2e9fd698dfa29000d7d.mockapi.io/movies").then((data)=>data.json()).then((movies)=>console.log(movies))
  // },[]);

  
  return (
    
    <ThemeProvider theme={theme}>
      <Paper style={{ borderRadius: "0px",minHeight:"100vh"}}elevation={4} >
        <div>
          <AppBar position="static">
            <Toolbar>
              <Button color="inherit" onClick={()=>navigate7("/")}>Home</Button>
              <Button color="inherit" onClick={()=>navigate7("/AddMovies")}>AddMovies</Button>
              <Button color="inherit" onClick={()=>navigate7("/MoviesList")}>MoviesList </Button>
              <Button color="inherit" onClick={()=>navigate7("/ColourGame")}>ColourGame</Button>
              <Button 
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
              color="inherit" value={modetext} onClick={()=> {
                setModetext(modetext === "Dark Mode" ? "Light Mode" : "Dark Mode");
                setMode(mode === "light" ? "dark" : "light" );

                }}>  {modetext}</Button>
            </Toolbar>
          </AppBar>
      
      

          <div className="router-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AddMovies" element={<AddMovies />} />
              <Route path="/MoviesList" element={<Movielist />} />
              <Route path="/ColourGame" element={<Colours />} />
              <Route path="/moviedetails/:id1" element={<Moviedetails />} />
              <Route path="/films" element={<Navigate replace to="/MoviesList" />} />
              <Route path="/EditMovie/:id3" element={<EditMovie movies={movies} setMovies={setMovies}/>} />
              <Route path="*" element={<Pagenotfound />} />
          {/* <Route path="*" element={<Navigate replace to="/404" />} /> */}
            </Routes>
          </div>
        </div>
      </Paper>
    </ThemeProvider>
  );
}


export { App,names};
