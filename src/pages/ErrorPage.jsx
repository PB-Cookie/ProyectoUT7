import React from 'react';
import { Container, IconButton, Typography } from '@mui/material';
import '../App.css';
import { Link, useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    // https://usamabhatti.hashnode.dev/react-center-a-component-horizontally-and-vertically
    <div id="error-page" style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }}> 
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>

      </p>
<Typography variant='h6'><Link href="/home">Volver atrás</Link></Typography>      

    </div>
  );
}
