import { Flex, Text } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex w='full' h='30%' bgColor='white' direction='row' >
      <Flex w='full' justify='space-between' >
        <Text
          fontSize='3rem'
          fontWeight='bold'
          color='yellow.400'
          ml='1rem'
          mt='1rem'
        >
          Seja Bem-Vindo!
        </Text>
        <Text mr='1rem' mt='2.5rem'>Logo aqui</Text>
      </Flex>
    </Flex>

  )
}
