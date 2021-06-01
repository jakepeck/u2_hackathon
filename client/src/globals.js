// export const axiosConfig = {
//   headers: { Authorization: `Bearer ${process.env.REACT_APP_TMDB_KEY}` }
// }

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? `${window.location.origin}`
<<<<<<< HEAD
    : 'http://localhost:3001'
=======
    : 'http://localhost:3001/api'
>>>>>>> 1f47b8ebcdcfda4609e3db39dbaae6e91693a4da

export const IMAGE_PATH = '#'
