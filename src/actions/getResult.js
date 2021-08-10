import axios from 'axios'

export const searchByName = inputValue => dispatch => {
  const baseUrl =
    'http://gateway.marvel.com/v1/public/characters?limit=20&ts=100&apikey='
  const apiKey = '48a29bbf9d161265dbba4308d4a4161c'
  const hash = '&hash=73f90b2ea4b854e631b542d080f6f002'
  const url = inputValue
    ? baseUrl + apiKey + hash + '&nameStartsWith=' + inputValue
    : baseUrl + apiKey + hash

  axios.get(url).then(response => {
    const result = response.data.data.results
    const expectedList = result.map(item => ({
      id: item.id,
      imgCard:
        item.thumbnail.path +
        '/portrait_uncanny' +
        '.' +
        item.thumbnail.extension,
      imgInfo:
        item.thumbnail.path +
        '/standard_fantastic' +
        '.' +
        item.thumbnail.extension,
      name: item.name,
      series: item.series.items,
    }))
    return dispatch({ type: 'GET_RESULT', payload: expectedList })
  })
}
