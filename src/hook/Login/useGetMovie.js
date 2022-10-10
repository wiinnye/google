import { api } from '../../services/api';

export async function GetMovie(setMovie) {
  try {
    const { data } = await api.get(`555?api_key=681393a7e4e2728ab97702c593cdc874&language=en-US`)
    console.log(data)

    const searchMovies = {
      pages: data.pages,
      popularity: data.popularity,
      originalLanguage: data.original_language,
      originalTitle: data.original_title,
      overview: data.overview,
      releaseDate: data.release_date,
      posterPath: data.poster_path,
      title: data.title,
      video: data.video,
      voteAverage: data.vote_average,
      voteCount: data.vote_count,
      movies: data.genres.map((item) => ({
        name: item.original_name,
        id: item.id,
      }))    
    }
    setMovie(searchMovies)
  } catch (erro) {
    console.log(erro.message)
  }
}