import { api } from '../../services/api';

export async function GetMovie(setMovie) {
  try {
    const { data } = await api.get(`https://api.themoviedb.org/3/movie/popular?api_key=681393a7e4e2728ab97702c593cdc874&language=pt-BR&page=1`)
    console.log(data)

    const searchMovies = {
      results: data.results.map((item) => ({
        overview: item.overview,
        title: item.title,
        posterPath: item.poster_path,
        releaseDate: item.release_date,
        voteAverage: item.vote_average,
      }
      )),
    }
    setMovie(searchMovies)
  } catch (erro) {
    console.log(erro.message)
  }
}