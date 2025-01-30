import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid2';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

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
      <Typography variant="h4" component="h1" textAlign="center" mt={3}>
        Path of Exile Patch Notes
      </Typography>
      {patchNotes.map((patch) => (
        <Card key={patch.version} sx={{ maxWidth: 1200, mt: 3 }}>
          <CardContent>
            <Link href={patch.source} target="_blank">
              <Typography variant="h6" component="h2">{patch.date}</Typography>
            </Link>
            <Typography gutterBottom variant="h6" fontWeight={700}>
              Versión: {patch.version}
            </Typography>
            <ul>
              {patch.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </Grid>
  );
};

export default Parches;
