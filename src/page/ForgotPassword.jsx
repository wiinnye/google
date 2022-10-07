import { Button, Flex, FormControl, FormLabel, Input, Text, useToast } from '@chakra-ui/react';
import { Main } from '../layout/main'
import { Container } from '../layout/container'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function ForgotPassword() {
  const toast = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")

  function handleForgotPassword() {
    if (email === '') {
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
    } else {
      navigate('/')
      //logica firebase aqui
      return (
        toast({
          position: 'bottom-right',
          title: 'Sucesso',
          description: "Verifiquei seu email!",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      )

    }
  }

  return (
    <Main>
      <Container justify="center" bgColor='yellow.100'>
        <Flex w='full' h='50%' justify='center' >
          <Flex
            w={{ base: '60%', md: '60%', lg: '30%' }}
            minH='300px'
            direction='column'
            bgColor='white'
            borderRadius="10px"
            p='1rem'
          >
            <Flex w='full' justify='space-between' >
              <Flex direction='column'>
                <Text
                  fontSize='1.2rem'
                  fontWeight='bold'
                  color='yellow.400'
                >
                  Esqueceu sua Senha?
                </Text>
                <Text fontSize='0.8rem'>Informe suas credenciais para continuar</Text>
              </Flex>
              <Flex><Text>Logo</Text></Flex>
            </Flex>

            <Flex mt='2rem'>
              <FormControl
                as="fieldset"
                position="relative"
                w="full"
                borderColor='yellow.400'
                _hover={{ borderColor: 'yellow.400' }}
                mb={{ base: "1rem", sm: "1rem", lg: "0" }}
              >
                <FormLabel
                  position="absolute"
                  color="yellow.400"
                  fontSize="0.7rem"
                  top="-9px"
                  left="15px"
                  backgroundColor="white"
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
            <Flex w='full' mt='2rem'>
              <Button
                w='30%'
                color='white'
                bgColor='yellow.400'
                _hover={{ bgColor: 'none' }}
                onClick={() => handleForgotPassword()}
              >
                Enviar
              </Button>
            </Flex>
            <Flex
              justify='end'
              mt={{ base: '2rem', md: '2rem', lg: '3rem' }}>
              <Text
                cursor='pointer'
                color="yellow.400"
                onClick={() => navigate('/')}
              > Lembrou sua senha? Clica aqui!</Text>
            </Flex>

          </Flex>
        </Flex>
      </Container>
    </Main>

  )
}