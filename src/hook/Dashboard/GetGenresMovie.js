import { api } from '../../services/api'

export async function getGenresMovie(id, setChangeGenres) {
  try {
    const { data } = await api.get(`https://api.themoviedb.org/3/movie/${id}/lists?api_key=681393a7e4e2728ab97702c593cdc874&language=en-US&page=1`)
    console.log(data)

    const changeAllGenres = {
      id: data.id,
      genres: data.results.map((item) => ({
        name: item.name,
        description: item.description,
        posterPath: item.poster_path
      }
      )),
    }
    setChangeGenres(changeAllGenres)
  } catch {
    console.log('error')
  }

}