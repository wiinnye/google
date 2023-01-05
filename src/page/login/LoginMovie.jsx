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
        console.log('aqui')
        return (
          < MdFavorite />
        )
      } else {
        console.log('else')
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
            justify='space-around'
            mt='2rem'
            direction='row'>
            <CardMovie
              img={movie.results?.[13].posterPath}
              label={movie.results?.[13].title}
              text={movie.results?.[13].overview}
              data={movie.results?.[13].releaseDate}
              fav={vote}
            />
            <CardMovie
              img={movie.results?.[1].posterPath}
              label={movie.results?.[1].title}
              text={movie.results?.[1].overview}
              data={movie.results?.[1].releaseDate}
              fav={vote}
            />
            <CardMovie
              img={movie.results?.[3].posterPath}
              label={movie.results?.[3].title}
              text={movie.results?.[3].overview}
              data={movie.results?.[3].releaseDate}
              fav={vote}
            />
          </Flex>
        </Flex>
      </Container>
    </Main >
  )
} 