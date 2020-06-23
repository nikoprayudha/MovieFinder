class MovieItem extends HTMLElement {

    //menerapkan shadow DOM
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

       

        /* movie item list */
        :host {
            display: block;
            margin-bottom: 18px;
            background-color:white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            border-radius: 10px;
            
        }
       
        .poster {
            padding:20px;
            width: 330px;
            max-height: 330px;
            object-fit: cover;
            object-position: center;
            box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.1);

        }
       
        .movie-info {
            padding: 24px;
        }
       
        .movie-info > h2 {
            font-weight: lighter;
        }
       
        .movie-info > p {
            margin-top: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 10; /* number of lines to show */
        }

        table {
            border-collapse: collapse;
            width: 100%;
        }
        
        th, td {
            text-align: left;
            padding: 10px;
        }
        
        th{
            background-color: #F2C94C;
            color: black;
        }

        td{
            background-color: #F2C94C;
            color: black;
        }

        </style>

        
        <center><img class="poster" src="${this._movie.Poster}" alt="Poster"></center>

        <div class="movie-info">
        <table>
        <tr>
            <th width="5px">Title</th>
            <th>:</th>
            <td><h2>${this._movie.Title}</h2></td>
            
        </tr>
        <tr>
            <th>Year</th>
            <th>:</th>
            <td><p>${this._movie.Year}</p></td> 
        </tr>
        <tr>
            <th>ImdbId</th>
            <th>:</th>
            <td><p>${this._movie.imdbID}</p></td> 
        </tr>
        <tr>
            <th>Type</th>
            <th>:</th>
            <td><p>${this._movie.Type}</p></td> 
        </tr>
        
        </table>
        </div>

        `;
    }


}

customElements.define("movie-item", MovieItem);