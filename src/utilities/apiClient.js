//here I keep functions that simply run api queries and return the results

const baseUrl = "https://api.themoviedb.org/3/"

export const getNewMovies = (success, failure) => {
  fetch(baseUrl+"movie/now_playing?api_key=468ccd57e5aa82f01ba1e1cff9eadb9e")
    .then(async res => {
      if(res.ok){
        const data = await res.json()
        success(data)
      } else {
        failure(res)
      }
    })
}