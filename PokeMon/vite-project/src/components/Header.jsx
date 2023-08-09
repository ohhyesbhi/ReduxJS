import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
function Header() {
  return (
    <>
   <div style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}> 
     <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
        <div style={{width:"20%"}}>
            <img src="https://www.freepnglogos.com/uploads/pokemon-logo-png-0.png" style={{width:"100%"}}/>
        </div>
     </div>
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" placeholder="Your Favourite Pokemon" variant="standard" />
    </Box>
</div>   
    </>
  )
}

export default Header
