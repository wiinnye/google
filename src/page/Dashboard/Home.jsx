
import HeaderDashboard from '../../components/Header/Dashboard/HearderDashboard';
import { Container } from '../../layout/container';
import { Main } from '../../layout/main';
import FilterHome from '../../components/Drawer';
import { Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useEffect } from 'react';
import { CardMovie } from '../../components/Card';
import { useState } from 'react';
import { GetNowPlaying } from '../../hook/Dashboard/GetNowPlaying';

export default function Home() {
  const [movie, setMovie] = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    GetNowPlaying(setMovie)
  }, [movie])

  return (
    <>
      <Main>
        <Container >
          <HeaderDashboard onOpen={onOpen} />
          <Flex w='full' h='full' direction='column' >
            <Flex ml='1rem'>
              <Text fontSize='2rem'>Ultimos Lançamentos</Text>
            </Flex>
            <Flex w='full' wrap='wrap' justify='center'>
              {movie ?
                movie.movie.map((item) => (
                  < CardMovie
                    ml='1rem'
                    key={item.id}
                    img={item.posterPath !== "" ? item.posterPath : 'sem imagem'}
                    label={item.title !== "" ? item.title : 'sem titulo'}
                    text={item.overview !== "" ? item.overview : 'sem descrição'}
                  />
                ))
                : <Text> Não temos filmes no momento</Text>
              }
            </Flex>
          </Flex>
        </Container>
      </Main>
      <FilterHome
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}