import { Button, Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Spinner, Text, Tooltip, useBoolean } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { MdExpandMore } from 'react-icons/md';
import { useSearchParams } from 'react-router-dom';
import { CardMovie } from '../../components/Card/index'
import HeaderDashboard from '../../components/Header/Dashboard/HearderDashboard';
import { GetNowPlaying } from '../../hook/Dashboard/GetNowPlaying';
import { GetSearchMovie } from '../../hook/Dashboard/GetSearch';
import { Container } from '../../layout/container';
import { Main } from '../../layout/main';

export default function Search({ openFilter, setOpenFilter }) {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('q')
  const [movie, setMovie] = useState([])
  const [sinopse, setSinopse] = useState('')
  const [language, setLanguage] = useState('')
  const [checkedFav, setCheckedFav] = useState([])

  useEffect(() => {
    GetSearchMovie(setMovie, search)
  }, [search])

  function showOverView(e) {
    setSinopse(e.target.value)
  }

  function showLanguage(e) {
    setLanguage(e.target.value)
  }

  function fav(id) {
    const allfav = [...movie]
    const item = allfav.find((favorite) => favorite.id === id)

    if (!item) {
      allfav.push({ id: id })
    } else {
      console.log('tirar')
    }
    setMovie(allfav)
    console.log(allfav)
  }

  return (
    <Main>
      <Container >
        <Flex w='full' direction='column'>
          <Text> Resultados para: {search}</Text>
        </Flex>
        <Flex w='full' direction='column'>
          <Flex w='full' wrap='wrap' justify='center'>
            {movie.length !== 0 ?
              movie.movie.map((item, index) => (
                < CardMovie
                  ml='1rem'
                  key={index}
                  img={item.posterPath !== "" ? item.posterPath : 'sem imagem'}
                  label={item.title !== "" ? item.title : 'sem titulo'}
                  text={item.overview === sinopse ? sinopse : ""}
                  language={item.originaLanguage ? language : ""}
                >

                  <Flex w='full' bgColor='blackAlpha.100' justify='space-between' mt='1rem'>
                    <Flex>
                      <Menu ml='1rem'>
                        <MenuButton
                          as={Button}
                          rightIcon={<MdExpandMore />}
                          bg='yelllow.200'
                          bgColor='transparent'
                          _hover={{ bgColor: 'transparent' }}
                        />
                        <MenuList>
                          <MenuItem value={item.overview} onClick={(e) => showOverView(e)}>Sinopse</MenuItem>
                          <MenuItem value={item.originaLanguage} onClick={(e) => showLanguage(e)}>Idioma</MenuItem>
                        </MenuList>
                      </Menu>
                    </Flex>

                    <Flex>
                      <Text textAlign='center' fontSize='1rem' mt='.5rem'>adicionar ao favorito</Text>
                      <Tooltip label="add ao favorito" aria-label='A tooltip'>
                        <IconButton
                          mt={{ base: '0', sm: '1.5rem', lg: '.2rem' }}
                          mr='.5rem'
                          bg='yelllow.200'
                          _hover={{ bgColor: 'transparent' }}
                          icon={checkedFav ? <BsSuitHeartFill /> : <BsSuitHeart />}
                          onClick={() => fav()}
                        />
                      </Tooltip>
                    </Flex>
                  </Flex>
                </CardMovie>
              ))
              : <Flex w='full' h='500px' alignItems='center' justify='center' >
                <Spinner
                  thickness='4px'
                  speed='0.65s'
                  emptyColor='gray.200'
                  color='yellow.200'
                  size='xl'
                />
              </Flex>
            }
          </Flex>
        </Flex>
      </Container>
    </Main>
  )
}

