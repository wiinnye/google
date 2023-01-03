import { Flex, Text } from '@chakra-ui/react';
import { Main } from '../../layout/main'
import { Container } from '../../layout/container'
import finn from '../../img/finn.png'
import { CardMovie } from '../../components/Card';
import { useEffect, useState } from 'react';
import { GetMovie } from '../../hook/Login/useGetMovie';

export function LoginMovie() {

  const [movie, setMovie] = useState('')

  useEffect(() => {
    GetMovie(setMovie)
  }, [])

  return (
    <Main>
      <Container >
        <Flex w='full' h='full' bgColor='white' direction='column'>
          <Text color='black' mt='1rem' ml='2rem' fontSize='1.5rem'>Filmes e séries novos pra voçê!(:</Text>
          < Flex w='full' justify='space-around' mt='2rem' >
            <CardMovie
              img={movie.results?.[0].posterPath}
              label={movie.results?.[0].title}
              text={movie.results?.[0].overview}
              data={movie.results?.[0].releaseDate}
            />
            <CardMovie img={finn} label={'nome filme'} text={"lorem sibjdnasndsndk dbsiadnosnd jdosnaokdnmosd ddndson"} />
          </Flex>
        </Flex>
      </Container>
    </Main >
  )
} 