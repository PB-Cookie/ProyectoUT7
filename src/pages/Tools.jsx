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
        width: '100%',
        height: 250,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: theme.spacing(2),
        ...theme.typography.body2,
        alignContent:'center',
        textAlign: 'center',
        borderRadius: 20,

    }));



    return (
        <div className='img-tools'  style={{ height: '100vh'}}>
            <Menu></Menu>
            <Grid container spacing={4} sx={{ ml: "10vw", mr: "15vw", mt:"3vw"}} width={0.8} height={'80vh'}>
                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>
                    <Link href='https://github.com/NeverSinkDev/NeverSink-Filter-for-PoE2/releases/tag/0.52.0a' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-filter.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>


                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>

                    <Link href='https://pathofbuilding.community/' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-pob.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>
                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>

                    <Link href='https://maxroll.gg/poe2/instilling-calculator' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-instill.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>
                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>

                    <Link href='https://maxroll.gg/poe2/atlas-tree/' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-atlas2.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>

                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>

                    <Link href='https://maxroll.gg/poe2/passive-tree/' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-passive.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>
                <Grid size={{ xs: 12,s:12, md: 6, xl: 6 }}>

                    <Link href='https://sidekick-poe.github.io/' target='_blank' sx={{ textDecoration: 'none' }}><DemoPaper square={false} sx={{ backgroundImage: 'url(/imgs/tools/tool-sidekick2.png)' }} className='paperTool' >
                    </DemoPaper></Link>
                </Grid>
            </Grid>


        </div>
    )
}

export default Tools
