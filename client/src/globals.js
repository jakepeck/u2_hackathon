export const axiosConfig = {
  headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` }
}

export const BASE_URL = 'https://api.themoviedb.org/3'

export const POSTER_PATH = 'https://image.tmdb.org/t/p/original'