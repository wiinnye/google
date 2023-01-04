import { Button, Flex, IconButton, Input, Tooltip } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md'
//import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'


export default function HeaderDashboard({ onOpen, isOpen, onClose }) {

  return (
    <Flex
      w='full'
      h='10%'
      bgColor='yellow.200'
      direction='row'
      justify='space-between'
    >
      <>
        <IconButton
          mt={{ base: '0', sm: '1.5rem', lg: '2rem' }}
          ml={{ base: '0', sm: '1rem', lg: '1rem' }}
          onClick={onOpen}
          icon={<MdMenu />}
        />
        <Flex w='50%'>
          <Input
            w='60%'
            mt='2rem'
            mr='1rem'
            placeholder='Buscar seu filme aqui...'
          />
          <Button
            w='80px'
            mt='2rem'
            mr='1rem'
          >
            Buscar
          </Button>
          <Button
            w='150px'
            mt='2rem'
            mr='1rem'
          >
            Limpar pesquisa
          </Button>
          <Tooltip label="Meus Favoritos" aria-label='A tooltip'>
            <IconButton
              mt={{ base: '0', sm: '1.5rem', lg: '2rem' }}
              mr='1rem'
              onClick={onOpen}
              icon={<BsSuitHeart />}
            />
          </Tooltip>
        </Flex>
      </>
    </Flex>
  )
}