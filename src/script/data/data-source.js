class DataSource {
    static searchMovie(keyword) {
        //ambil api json
        return fetch(`http://www.omdbapi.com?apikey=587b0af0&s=${keyword}`)

        .then(response => response.json())

        //response json ada / tidak
        .then(responseJson => {

            // ambil json pencarian search
            if (responseJson.Search) {
                return Promise.resolve(responseJson.Search);
            } else {
                return Promise.reject(`${keyword} Movie not found !, search by title`);
            }
        })
    }
}

export default DataSource;