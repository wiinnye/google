import { Flex, Image, Text } from '@chakra-ui/react';
export function CardMovie({ children, label, text, img, ...rest }) {
  return (
    <Flex
      maxW='200px'
      minH='70%'
      bgColor='yellow.200'
      borderRadius='1rem'
      direction='column'
      {...rest}
    >
      <Image w='full' maxH='60%' borderRadius='1rem' src={img}></Image>
      <Text textAlign='center' mt='1rem' fontWeight='bold'>{label}</Text>
      <Text mt='1rem' align='center'>{text}</Text>
      {children}
    </Flex>
  )
}
