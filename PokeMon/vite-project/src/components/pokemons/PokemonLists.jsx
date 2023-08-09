
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography'
import randomColor from "randomcolor";

import PokemonDetails from './PokemonDetails';
import { Link } from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';

function PokemonLists({list,count}) {

  const [type,setType] = useState([]);
  const [counts,setCounts] = useState();

  function f(data){
     axios.get(`https://pokeapi.co/api/v2/type/${data}/`).then((response)=>{
       console.log(response.data.pokemon)
     setType(response.data.pokemon);      
     })

  
      console.log("count")
      console.log(type)
      PokemonDetails(type)

  }



  return (
   
    <>
    {
        list.map((item,i)=>{
            let color = randomColor();
            return (
              <>
                <Card sx={{ minWidth: 250, minHeight: 300,marginTop:"2rem",marginLeft:"0.5rem",backgroundColor:color}}>
                  <CardMedia
                    sx={{ height: 210 }}
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${count+i+1}.svg`}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography color="white" gutterBottom variant="h4" component="div" centered={true}>
                      <Link to="/pokemon" onClick = {()=>{
                        // console.log(item.name)
                        f(count+i+1)
                      }}>{item.name}</Link>
                    </Typography>
                  </CardContent>
                </Card>
              </>
            );
        })
    }
     
    </>
  );
}

export default PokemonLists
