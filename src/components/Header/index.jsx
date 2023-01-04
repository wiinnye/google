import { Flex, Icon, Text } from '@chakra-ui/react';
import { MdMovieFilter } from 'react-icons/md'

export function Header() {
  return (
    <Flex w='full' h='30%' bgColor='white' direction='row' >
      <Flex w='full' justify='space-between' >
        <Text
          fontSize='3rem'
          fontWeight='bold'
          color='yellow.400'
          ml='3rem'
          mt='1rem'
        >
          Filmes e séries novos para voçê!
        </Text>
        <Icon as={MdMovieFilter} mt='2rem' mr='3rem' w={10} h={10} color='yellow.400' />

      </Flex>
    </Flex>

  )
}
