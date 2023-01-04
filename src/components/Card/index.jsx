import { Flex, Image, Text } from '@chakra-ui/react';
export function CardMovie({ children, label, text, img, data, fav, ...rest }) {
  return (
    <Flex
      maxW={{ base: '300px', sm: '200px', lg: '350px' }}
      h={{ base: '25%', sm: 'full', lg: '90%' }}
      bgColor='yellow.200'
      borderRadius='1rem'
      direction='column'
      mt="1rem"
      {...rest}
    >
      <Image
        w={{ base: '50%', sm: '50%', lg: 'full' }}
        h={{ base: '50%', sm: 'full', lg: '60%' }}
        borderRadius='1rem'
        src={`https://image.tmdb.org/t/p/original${img}`}
        alt='imagem do filme'>
      </Image>
      <Text textAlign='center' mt='1rem' fontWeight='bold'>{label}</Text>
      <Text textAlign='center' mt='1rem' >{data}</Text>
      <Text textAlign='center' fontSize='.8rem' mt='1rem'>{text}</Text>
      <Text textAlign='center' fontSize='.4rem'>{fav}</Text>
      {children}
    </Flex>
  )
}
