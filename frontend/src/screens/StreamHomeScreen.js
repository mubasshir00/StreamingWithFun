import { Grid, Paper, styled } from '@mui/material'
import React, { useEffect } from 'react'
import LiveChannel from '../components/streamingComponents/LiveChannel';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const StreamHomeScreen = () => {
  useEffect(()=>{
    
  })
  return (
    <>
      <Grid container spacing={3} sx={{ flexGrow: 1 }}>
        <Grid xs={12} xsOffset={3} md={3} mdOffset={0}>
          <Item>1</Item>
        </Grid>
        <Grid xs={12} md={9}  mdOffset="auto">
          <Item>
            <LiveChannel/>
          </Item>
        </Grid>
        
      </Grid>
    </>
  );
}

export default StreamHomeScreen