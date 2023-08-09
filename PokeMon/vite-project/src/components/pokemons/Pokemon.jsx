import {useEffect, useState} from 'react'
import PokemonLists from './PokemonLists'
import axios from 'axios';

function Pokemon() {

    const[pokemons,setPokemons] = useState([]);

    const[endcount,setEndCount] = useState(0)
    const [step,setStep] = useState(1)

    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${endcount}&limit=20`).then((response) => {
          setPokemons(response.data.results);
        });
    }, [step]);

if(step == 1){
        
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <PokemonLists list={pokemons} count={endcount} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button
          style={{ padding: "1rem" }}
          onClick={() => {
            setEndCount(endcount + 20);
            setStep(2);
          }}
        >
          next
        </button>
      </div>
    </>
  );
}

else if(step == 2){
           
  return (

    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <PokemonLists list={pokemons} count={endcount} />
      </div>
      <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem"}}>
      <button style={{padding:"1rem"}} onClick={()=>{
        setEndCount(endcount-20)
        setStep(1)
      }}>prev</button>
      <button style={{padding:"1rem"}} onClick={()=>{
        setEndCount(endcount+20)
        setStep(3)
      }}>next</button>
      </div>
    </>
  );
}
else if(step == 3){
           
    return (
  
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <PokemonLists list={pokemons} count={endcount} />
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount-20)
          setStep(2)
        }}>prev</button>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount+20)
          setStep(4)
        }}>next</button>
        </div>
      </>
    );
  }

  else if(step == 4){
           
    return (
  
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <PokemonLists list={pokemons} count={endcount} />
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount-20)
          setStep(3)
        }}>prev</button>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount+20)
          setStep(5)
        }}>next</button>
        </div>
      </>
    );
  }  
  else if(step == 5){
           
    return (
  
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <PokemonLists list={pokemons} count={endcount} />
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount-20)
          setStep(4)
        }}>prev</button>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount+20)
          setStep(6)
        }}>next</button>
        </div>
      </>
    );
  }  

  else if(step == 5){
           
    return (
  
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <PokemonLists list={pokemons} count={endcount} />
        </div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"2rem"}}>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount-20)
          setStep(5)
        }}>prev</button>
        <button style={{padding:"1rem"}} onClick={()=>{
          setEndCount(endcount+20)
          setStep(7)
        }}>next</button>
        </div>
      </>
    );
  }  

}
export default Pokemon
