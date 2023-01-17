import HeaderDashboard from '../../components/Header/Dashboard/HearderDashboard';
import { Container } from '../../layout/container';
import { Main } from '../../layout/main';
import FilterHome from '../../components/Drawer';
import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spinner,
  Text,
  Tooltip,
  useBoolean,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import { CardMovie } from '../../components/Card';
import { useState } from 'react';
import { GetNowPlaying } from '../../hook/Dashboard/GetNowPlaying';
import { BsSuitHeartFill } from 'react-icons/bs'
import { BsSuitHeart } from 'react-icons/bs'
import { MdExpandMore } from 'react-icons/md'
import Search from './Search';
//import { useNavigate } from 'react-router-dom';

export default function Home() {
  //const navigate = useNavigate()
  const [movie, setMovie] = useState([])
  const [sinopse, setSinopse] = useState('')
  const [language, setLanguage] = useState('')
  const [openFilter, setOpenFilter] = useBoolean()
  const [checkedFav, setCheckedFav] = useState([])
  //const [checkedFav, setCheckedFav] = useState(false)
  //const arrayfav = []
  console.log(movie)

  useEffect(() => {
    GetNowPlaying(setMovie)
  }, [])

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
  // setCheckedFav(!checkedFav);
  // if (checkedFav === movie.title) {
  //         localStorage.setItem("filme fav", JSON.stringify(movie.id));
  //       } else {
  //         localStorage.removeItem("filme fav");
  //       }

  return (
    <>
      <Main>
        <Container >
          <HeaderDashboard
            setOpenFilter={setOpenFilter}
            setMovie={setMovie}
          />
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
      <FilterHome
        openFilter={openFilter}
        setOpenFilter={setOpenFilter.off}
        movie={movie}
      />
    </>
  )
}