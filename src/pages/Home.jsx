import { useState } from 'react'
import Menu from '../components/Menu'
import Parches from '../components/Parches'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

function Home() {


  return (
    <>
      <Menu></Menu>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh' }}
      >
        <Grid item xs={3}>
          <Parches />
        </Grid>
      </Grid>
    </>
  )
}

export default Home
