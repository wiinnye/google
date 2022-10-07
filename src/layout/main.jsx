import { Flex } from "@chakra-ui/react"

export function Main({ children, ...rest }) {
  return (
    <Flex
      w= '100%'
      h= '100%'
      fontFamily = 'heading'
      { ...rest }
      >
    { children }
    </Flex >
  )
}