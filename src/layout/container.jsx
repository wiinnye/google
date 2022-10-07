import { Flex } from '@chakra-ui/react';

export function Container({ children, ...rest }) {
  return (
    <Flex w='full' h='full' justify='center'>
      <Flex w='full' direction='column' {...rest}>
        {children}
      </Flex>
    </Flex>

  )
}