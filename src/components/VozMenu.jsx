import { IconButton } from '@mui/material'
import React, { useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link, useNavigate } from 'react-router-dom';
const VozMenu = () => {
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const commands = [
    {
      command: 'ir a :pag', //no recomendado
      callback: (pag) => navigate("/"+pag)
    },
    {
      command: ['inicio', 'home'],
      callback: () => navigate("/home"),
      isFuzzyMatch: true,
      fuzzyMatchingThreshold: 0.2,
      matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
    },
    {
        command:  ['build', 'builds'],
        callback: () => navigate("/builds"),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
      },
      {
        command: ['herramientas', 'tools'],
        callback: () => navigate("/tools"),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
      },
      {
        command: ['donar', 'donate'],
        callback: () => ("/donar"),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
        matchInterim: true //estas 3 opciones son para que no tenga que ser exacto
      },
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

   
  
  console.log(message)
  return (
        <IconButton onClick={SpeechRecognition.startListening}><PlayArrowIcon></PlayArrowIcon></IconButton>
  )
}
export default VozMenu