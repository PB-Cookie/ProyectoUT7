import { useState, useRef } from 'react'
import Menu from '../components/Menu'
import Parches from '../components/Parches'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

import '../App.css';
import VozMenu from '../components/VozMenu';
import { Button } from '@mui/material';

function Builds() {
  const commands = [

      {
        command: 'pausar',
        callback: () => pararVideo(),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
      },
      {
        command: ['reanudar', 'continuar'],
        callback: () => reanudarVideo(),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
      },


  ]
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition({ commands })
  console.log(transcript)
  if (!browserSupportsSpeechRecognition) {
    return null
  }





  const clase = useState("");
  const videoRef = useRef(null);
  // https://stackoverflow.com/questions/66329185/pause-other-video-if-selected-video-is-playing-in-react
  function pausarVideo() {

      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        '*'
      );
    
  }

  function reanudarVideo() {
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"playVideo","args":""}',
        '*'
      );
  }
  function pararVideo() {
      videoRef.current.contentWindow.postMessage(
        '{"event":"command","func":"stopVideo","args":""}',
        '*'
      );
  }


  return (
    <>
      <Menu></Menu>
      <div style={{marginLeft:20}}>
      <p>Prueba a darle al botón de "Voz" y decir una de las siguientes clases:</p>
      <ul>
        <li>Hechicera</li>
        <li>Mercenario</li>
        <li>Guerrero</li>
        <li>Exploradora</li>
        <li>Monje</li>
        <li>Bruja</li>
      </ul>
      </div>


      <div class="ratio ratio-16x9" style={{width:'60%', marginLeft:'20%'}}>
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/JA6YQSfGEKU?enablejsapi=1" ref={videoRef}allowfullscreen></iframe>
      </div>
{/* TODO: Solo falta uno ns por qué */}


<div id="error-page" style={{display:'flex',justifyContent:'center', alignItems:'center' }}> 
    <Button onClick={pausarVideo}>PAUSAR</Button>
    <Button onClick={reanudarVideo}>REANUDAR</Button>
    <Button onClick={SpeechRecognition.startListening}>VOZ</Button>
</div>
      {/* Bruja: https://www.youtube.com/embed/YZSq2LkDyI4 */}

      {/* Mercenario: https://www.youtube.com/embed/iU0lf6CkGEk */}

      {/* Guerrero: https://www.youtube.com/embed/8M8DIM5KHek */}

      {/* Exploradora: https://www.youtube.com/embed/ZXDW_aNSdzg */}

      {/* Monje : https://www.youtube.com/embed/j1JSQcXb2Ww */}


    </>
  )
}

export default Builds
