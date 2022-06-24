// import { TextField } from "@mui/material"
import { React, useState } from 'react'
import './SaveUser.css'

import { BotaoBody } from '../Button/index'
import { Input } from '@chakra-ui/react'



export const SaveUser = ({ onAddUser }) => {

  const [valor, setValor] = useState('')
  // const key = 13;

  function handleSaveValue(e) { // atraves dessa funcao vamos pegar os dados que estao sendo passados
    const valores = {
      valor
    }

    if (valor !== '') { // apenas verificando se meu valor nao esta null
      onAddUser(valores) //atraves desse podemos ter as informações lá no App.jsx 
      Limpar()
    }
  }

  function Limpar() {
    setValor('')
  }

// function Enter(e) {
//       if (e.code === key ) {
//         const enviar = handleSaveValue()
//         console.log(enviar)
//       }
//     }

  return (
    <div className='container'>
      <div className='Input'>
        <h1>Google</h1>
        <div className='itens'>
          <Input
            size='lg'
            variant='filled'
            fontSize='1.2em'
            width={500}
            height={40}
            border={'transparent'}
            borderRadius={30}
            value={valor}
            onChange={e => setValor(e.target.value)}
            // onKeyDown={e => Enter(e)}
          />
        </div>
      </div>
      <BotaoBody handleSaveValue={handleSaveValue} />
    </div>
  )
}