import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,

} from '@chakra-ui/react';

export default function FilterFavorite({ openFavorite, setOpenFavorite }) {

  return (
    <>
      <Drawer isOpen={openFavorite} onClose={setOpenFavorite} size="xs" placement={'right'}  >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader fontSize='2rem'>Meus Favoritos</DrawerHeader>
          <DrawerBody>
            
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}