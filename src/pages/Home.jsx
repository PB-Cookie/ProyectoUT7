import { useState } from 'react'
import Menu from '../components/Menu'
import Parches from '../components/Parches'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import '../home.css';
function Home() {


  return (
    <div className='img-home'>
      <Menu></Menu>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid>
          <Parches />
        </Grid>
      </Grid>
    </div>
  )
}

export default Home
