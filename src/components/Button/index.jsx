import React from 'react'
import { Link } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import './index.css'

export const BotaoBody = ({ handleSaveValue }) => {
  return (
    <div className='botao'>
      <div className='items'>
        <Button
          w="140px"
          bgColor="grey"
          _hover={{backgroundColor:' rgb(83, 86, 88)' }}
          fontSize={15}
          onClick={handleSaveValue}>
          Pesquisar Google
        </Button>

        <Button
          w="140px"
          fontSize={15}
          _hover={{backgroundColor:' rgb(83, 86, 88)' }}
          onClick={handleSaveValue}>
          <Link 
          textDecoration='none'
          href='https://www.google.com/doodles' target='_blank'> Estou com Sorte
          </Link>
        </Button>

      </div>
      <span> Disponibilizado pelo Google em:<strong> English </strong></span>
    </div>
  )
}
