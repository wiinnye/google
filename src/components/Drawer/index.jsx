import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Text,
} from '@chakra-ui/react';
//import { baseIdMovie } from '../../utils/baseIdMovie';

export default function FilterHome({ openFilter, setOpenFilter, movie }) {


  return (
    <>
      <Drawer isOpen={openFilter} onClose={setOpenFilter} size="xs" placement={'left'}  >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='2rem'>Gêneros </DrawerHeader>
          <DrawerBody >
            <Flex direction='column'>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Ação
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Aventura
              </Text>
              <Text
                fontSize='1.2rem'
                mb=' .5rem'
                cursor='pointer'
              >

                Anime
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Comedia
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Drama
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Desenho infantil
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Romance
              </Text>
              <Text
                fontSize='1.2rem'
                mb='.5rem'
                cursor='pointer'
              >
                Terror
              </Text>

            </Flex>

          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}