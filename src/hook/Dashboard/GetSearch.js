import { api } from '../../services/api';

export async function GetSearchMovie(setMovies, search) {
  try {
    const { data } = await api.get(`https://api.themoviedb.org/3/search/movie?api_key=681393a7e4e2728ab97702c593cdc874&language=en-US&page=1&include_adult=false&query=${search}`)
    console.log(data)

    const nowMovies = {
      movie: data.results.map((item) => ({
        title: item.title,
        posterPath: item.poster_path,
        overview: item.overview,
      }
      )),
    }
    setMovies(nowMovies)

  }
  catch {
    console.log('erro')
  }
}