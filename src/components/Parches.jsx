import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import '../home.css'


const Parches = () => {
  const [patchNotes, setPatchNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatchNotes = async () => {
      try {
        const response = await fetch('js/patchnotes.json');
        const data = await response.json();
        setPatchNotes(data);
      } catch (error) {
        console.error('Error al cargar:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPatchNotes();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid  alignItems="center">
      <Typography variant="h4" component="h1" textAlign="center" mt={3} color='#f5ecae'>
        Path of Exile Patch Notes
      </Typography>
      {patchNotes.map((patch) => (
        <Card key={patch.version} sx={{ maxWidth: 1200, mt: 3, padding:1, paddingRight:4} } >
          <CardContent sx={{ paddingBottom: '10px !important' }}> {/*el !important fuerza la anulación de estilos predeterminados */}
            <Link href={patch.source} target="_blank" color='#b5af82'>
              <Typography variant="h6" component="h2" marginLeft={3} marginTop={1} fontWeight={700}>{"Versión "+patch.version +" | "+ patch.date}</Typography>
            </Link>
 
            <ul>
              {patch.notes.map((note, index) => (
                <li key={index} className='colorTexto'>{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Parches;
