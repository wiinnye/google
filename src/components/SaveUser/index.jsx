// import { TextField } from "@mui/material"
import { React, useState } from 'react'
import './SaveUser.css'

import { BotaoBody } from '../Button/index'
import { Input, InputLeftElement, InputRightElement, InputGroup } from '@chakra-ui/react'
import { BiSearch } from 'react-icons/bi'
import { BiMicrophone } from 'react-icons/bi'
import { BsKeyboard } from 'react-icons/bs'


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

          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              color={'grey'}
              _focusVisible={{ background: "none" }}
              children={<BiSearch color='gray.300' />}
            />
            <InputRightElement
              pointerEvents='none'
              mr='30px'
              color={'grey'}
              children={<BsKeyboard color='gray.300'
              />}
            />
            <InputRightElement
              pointerEvents='none'
              color={'grey'}
              children={<BiMicrophone color='gray.300' />}
            />

            <Input
              size='md'
              width='500px'
              variant='filled'
              bgColor='rgb(88, 89, 90)'
              color='white'
              border={'transparent'}
              borderRadius={30}
              value={valor}
              onChange={e => setValor(e.target.value)}
            // onKeyDown={e => Enter(e)}
            />
          </InputGroup>

        </div>
      </div>
      <BotaoBody handleSaveValue={handleSaveValue} />
    </div>
  )
}