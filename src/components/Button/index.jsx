import React from 'react'
import { Button } from "@mui/material"
import './index.css'

export const BotaoBody = ({ handleSaveValue }) => {
  return (
    <div className='botao'>
      <div className='items'>
        <Button onClick={handleSaveValue}>Pesquisar Google</Button>
        <Button > <a href='https://www.google.com/doodles' target='_blank'> Estou com Sorte</a> </Button>
      </div>
      <span> Disponibilizado pelo Google em:<strong> English </strong></span>
    </div>
  )
}
