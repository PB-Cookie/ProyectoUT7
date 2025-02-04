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
    },
    {
        command:  ['build', 'builds'],
        callback: () => navigate("/builds"),
        isFuzzyMatch: true,
        fuzzyMatchingThreshold: 0.2,
      },
      {
        command: ['herramientas', 'tools'],
        callback: () => navigate("/tools"),

      },
      {
        command: ['donar', 'donación'],
        callback: () => navigate("/donar"),

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