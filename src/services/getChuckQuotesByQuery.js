export const getChuckQuotesByQuery = async (queryTerm) => {
    const url = `https://api.chucknorris.io/jokes/search?query=${queryTerm}`
    const response =  await fetch(url).then(res => res.json())
    return response
}