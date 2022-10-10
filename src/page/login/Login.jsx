import { Button, Checkbox, Flex, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Header} from '../../components/Header';
import { Container } from '../../layout/container';
import { Main } from '../../layout/main'

export function Login() {
  const toast = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleLogin() {
    if (email === "") {
      return (
        toast({
          position: 'bottom-right',
          title: 'Erro',
          description: "Preencha o campo de email",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      )
    } else if (password === "") {
      return (
        toast({
          position: 'bottom-right',
          title: 'Erro',
          description: "Preencha o campo de senha",
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      )
    } else {
      navigate('/home')
    }
  }

  return (
    <Main>
      <Header />
      <Container h='50%' justify="center" bgColor='yellow.300' >
        <Flex w='full' h='full' justify='end' pr='3rem'  >
          <Flex
            w={{ base: '60%', md: '60%', lg: '40%' }}
            minH='100px'
            direction='column'
            bgColor='yellow.300'
            borderRadius="10px"
            p='1rem'
          >

            <Text fontSize='1.2rem' color='black'>Entre com sua conta</Text>
            <Flex mt='2rem'>
              <FormControl
                as="fieldset"
                position="relative"
                w="80%"
                borderColor='black'
                _hover={{ borderColor: 'yellow.100' }}
                mb={{ base: "1rem", sm: "1rem", lg: "0" }}
              >
                <FormLabel
                  position="absolute"
                  color="yellow.500"
                  fontSize="0.7rem"
                  top="-9px"
                  left="15px"
                  backgroundColor="yellow.300"
                  zIndex="99"
                  p="0 5px"> E-mail
                </FormLabel>
                <Input
                  name='email'
                  placeholder='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
            </Flex>

            <Flex mt='1rem'>
              <FormControl
                as="fieldset"
                position="relative"
                w="80%"
                borderColor='black'
                mb={{ base: "1rem", sm: "1rem", lg: "0" }}>
                <FormLabel
                  position="absolute"
                  color="yellow.500"
                  fontSize="0.7rem"
                  top="-9px"
                  left="15px"
                  backgroundColor="yellow.300"
                  zIndex="99"
                  p="0 5px"> Senha
                </FormLabel>
                <Input
                  name='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder='senha' />
              </FormControl>
            </Flex>

            <Flex
              justify='space-between'
              mt={{ base: '1rem', md: '1rem', lg: '1.5rem' }}>
              <Checkbox>Lembre-se de mim</Checkbox>
              <Text
                cursor='pointer'
                color="yellow.500"
                onClick={() => navigate('/forgotpassword')}
              > Esqueceu sua senha?</Text>
            </Flex>
            <Flex w='full' mt='2rem'>
              <Button
                w='full'
                color='white'
                bgColor='yellow.400'
                onClick={() => handleLogin()}
                _hover={{ bgColor: 'none' }}
              >
                Entrar
              </Button>
            </Flex>

          </Flex>
        </Flex>
      </Container>     
    </Main>
  )
}