import { Flex } from '@chakra-ui/react';
import { Main } from '../../layout/main'
import { Container } from '../../layout/container'
import { CardMovie } from '../../components/Card';
import { useEffect, useState } from 'react';
import { GetMovie } from '../../hook/Login/useGetMovie';
import { MdFavorite } from 'react-icons/md'
import { MdFavoriteBorder } from 'react-icons/md'


export function LoginMovie() {

  const [movie, setMovie] = useState('')

  useEffect(() => {
    GetMovie(setMovie)
  }, [])

  const vote = () => {
    if (movie) {
      if (movie.voteAverage >= 5) {
        return (
          < MdFavorite />
        )
      } else {
        return <MdFavoriteBorder />
      }
    }
  }

  return (
    <Main>
      <Container >
        <Flex w='full' h='full' bgColor='white' direction='column'>
          < Flex
            w='full'
            h='full'
            justify='space-around'
            mt='2rem'
            direction='row'>
            <CardMovie
              img={movie.results?.[0].posterPath}
              label={movie.results?.[0].title}
              fav={vote}
            />
            <CardMovie
              img={movie.results?.[1].posterPath}
              label={movie.results?.[1].title}
              fav={vote}
            />
            <CardMovie
              img={movie.results?.[2].posterPath}
              label={movie.results?.[2].title}
              fav={vote}
            />
          </Flex>
        </Flex>
      </Container>
    </Main >
  )
} 