import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

export default function FilterHome({ isOpen, onClose }) {

  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose} size="xs" placement={'left'}  >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='2rem'>Gêneros</DrawerHeader>
          <DrawerBody>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Ação</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Aventura</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Anime</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Comedia</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Drama</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Desenho infantil</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Romance</Text>
            <Text fontSize='1.2rem' mb='.5rem' cursor='pointer'>Terror</Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}