import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { useState } from 'react'
import Menu from '../components/Menu'
import Parches from '../components/Parches'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import '../App.css';
import { Typography } from '@mui/material';

function Tools() {

    const DemoPaper = styled(Paper)(({ theme }) => ({
        width: '70vw',
        height: 250,
        backgroundRepeat: 'no-repeat', // Evita la repetición
        backgroundSize: 'cover', // Asegura que cubra todo el espacio
        backgroundPosition: 'center', // Centra la imagen
        padding: theme.spacing(2),
        ...theme.typography.body2,
        textAlign: 'center',
        borderRadius:20,

    }));



    return (
        <>
            <Menu></Menu>
            <Stack direction="column" spacing={4} sx={{ ml: "15vw", mr:"15vw" }}>

                <Link href='google.com'><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tool-filter2.webp)' }} className='paperTool' >
                    <Typography variant='h1' color='white' className='text'>FILTER</Typography>
                </DemoPaper></Link>


                <Link href='google.com'><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tool-pob.webp)' }} className='paperTool' >
                    <Typography variant='h1' color='white'>Path of Building</Typography>
                </DemoPaper></Link>

                <Link href='google.com'><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tool-instill.webp)' }} className='paperTool' >
                    <Typography variant='h1' color='white'>Instill</Typography>
                </DemoPaper></Link>

                <Link href='google.com'><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tool-atlas.avif)' }} className='paperTool' >
                    <Typography variant='h1' color='white'>ATLAS</Typography>
                </DemoPaper></Link>

                <Link href='google.com'><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tool-passive.png)' }} className='paperTool' >
                    <Typography variant='h1' color='white'>FILTER</Typography>
                </DemoPaper></Link>

            </Stack>


        </>
    )
}

export default Tools
