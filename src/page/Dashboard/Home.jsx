
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
  const { movie, setMovie } = useState()
  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    GetNowPlaying()
  }, [])

  return (
    <>
      <Main>
        <Container>
          <HeaderDashboard onOpen={onOpen} />
          <Flex justify='center'>
            <Flex>
              <Text>Lançamentos</Text>
            </Flex>
            {/* {movie.movie.map((item) => ( */}
              <CardMovie
                //key={item.id}
              // img={item.results.posterPath}
              // text={item.results.overview}
              // data={item.results.overview}
              // label={item.results.overview}
              />
            {/* )) */}
            {/* } */}
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