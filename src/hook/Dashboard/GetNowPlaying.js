import { api } from '../../services/api';

export async function GetNowPlaying(setMovie) {
  try {
    const { data } = await api.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=681393a7e4e2728ab97702c593cdc874&language=pt-BR&page=1`)
    
    const nowMovies = {
      movie: data.results.map((item) => ({
        overview: item.overview,
        title: item.title,
        posterPath: item.poster_path,
        releaseDate: item.release_date,
        voteAverage: item.vote_average,
      }
      )),
    }
    setMovie(nowMovies)
  } catch (erro) {
    console.log(erro.message)
  }
}