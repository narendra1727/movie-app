import { useState,useEffect } from "react";
import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';


function Counter() {
  let [like, setLike] = useState(0);
  let [dislike, setDislike] = useState(0);

  

  return (
    <div className="counter-icons">
      <Badge badgeContent={like} color="primary">
        <IconButton color="primary" onClick={() => setLike(like + 1)}>👍</IconButton>
      </Badge>
      <Badge badgeContent={dislike} color="error">
        <IconButton color="error" onClick={() => setDislike(dislike+1)}>👎</IconButton>
      </Badge>
      
    </div>
  );
}

export { Counter};