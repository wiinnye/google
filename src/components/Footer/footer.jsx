import { Flex, Text } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex w='full' h='30%' bgColor='white' direction='column' >
      <Flex w='full' direction='column' borderTop='.1rem solid' borderColor='yellow.400'>
        <Text
          fontSize='md'
          fontWeight='bold'
          color='yellow.400'
          mt='1rem'
          textAlign='center'
        >
          Desenvolvindo por Winnye
        </Text>
        <Text
          fontSize='md'
          fontWeight='bold'
          color='yellow.400'
          textAlign='center'
        >com ReactJs</Text>
      </Flex>
    </Flex>

  )
}