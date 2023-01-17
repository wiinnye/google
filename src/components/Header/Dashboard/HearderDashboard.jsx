import { Button, Flex, IconButton, Input, Tooltip, useBoolean } from '@chakra-ui/react';
import { MdMenu } from 'react-icons/md'
//import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import { CgLogOff } from 'react-icons/cg'
import { useNavigate } from 'react-router-dom';
//import { GetSearchMovie } from '../../../hook/Dashboard/GetSearch';
import { GetNowPlaying } from '../../../hook/Dashboard/GetNowPlaying';
import FilterFavorite from '../../Drawer/FilterFavorite';
import { useState } from 'react';


export default function HeaderDashboard({ setOpenFilter, setMovie }) {
  const navigate = useNavigate()
  const [openFavorite, setOpenFavorite] = useBoolean()
  const [search, setSearch] = useState('')

  function SearchMovies() {
    if (search) {
      navigate(`/search?q=${search}`)
    } else {
      setSearch('')
      console.log('erro')
    }
  }

  function clearSearch() {
    setSearch('')
    setMovie('')
    GetNowPlaying(setMovie)
  }

  return (
    <>
      <Flex
        w='full'
        minH='10%'
        bgColor='yellow.200'
        direction='row'
        justify='space-between'
      >
        <>
          <IconButton
            mt={{ base: '0', sm: '1.5rem', lg: '2rem' }}
            ml={{ base: '0', sm: '1rem', lg: '3rem' }}
            onClick={setOpenFilter.on}
            icon={<MdMenu />}
          />
          <Flex w='50%'>
            <Input
              w='60%'
              mt='2rem'
              mr='1rem'
              placeholder='Buscar seu filme aqui...'
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyUp={(e) => {
                if (e.keyCode === 13 || e.which === 13) {
                  SearchMovies()
                }
              }}
            />
            <Button
              w='80px'
              mt='2rem'
              mr='1rem'
              onClick={() => SearchMovies()}
            >
              Buscar
            </Button>
            <Button
              w='150px'
              mt='2rem'
              mr='1rem'
              onClick={() => clearSearch()}
            >
              Limpar pesquisa
            </Button>
            <Tooltip label="Meus Favoritos" aria-label='A tooltip'>
              <IconButton
                mt={{ base: '0', sm: '1.5rem', lg: '2rem' }}
                mr='1rem'
                onClick={setOpenFavorite.on}
                icon={<BsSuitHeart />}
              />
            </Tooltip>

            <Tooltip label="Deslogar" aria-label='A tooltip'>
              <IconButton
                mt={{ base: '0', sm: '1.5rem', lg: '2rem' }}
                mr='1rem'
                onClick={() => navigate('/')}
                icon={<CgLogOff />}
              />
            </Tooltip>
          </Flex>
        </>
      </Flex>
      <FilterFavorite
        openFavorite={openFavorite}
        setOpenFavorite={setOpenFavorite.off}
      />
    </>
  )
}