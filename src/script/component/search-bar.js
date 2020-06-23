class SearchBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#searchElement").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        .search-container {
            max-width: 1000px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 50px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: orange;
            margin-top:250px;
        }
    
        .search-container > input {
            width: 100%;
            padding: 16px;
            border: 0;
            border-radius:10px 0px 00px 10px;
            border-bottom: 2px solid black;
            font-weight: bold;
        }
    
        .search-container > input:focus {
            outline: 0;
            border-bottom: 2px solid black;
        }
    
        .search-container > input:focus::placeholder {
            font-weight: bold;
        }
    
        .search-container >  input::placeholder {
            color: black;
            font-weight: normal;
        }
    
        .search-container > button {
            width: 30%;
            cursor: pointer;
            margin-left:auto;
            padding: 16px;
            background-color: black;
            color: white;
            border:0;
            border-radius:0px 20px 20px 0px;
            text-transform: uppercase;
        }
        
        /* responsive mobile */
        @media screen and (max-width: 550px){
            .search-container {
                flex-direction: column;
                position: static;
            }
    
            .search-container > input {
                width: 100%;
                margin-bottom: 12px;
            }
    
            .search-container > button {
                width: 100%;
            }
        }
        </style>

        <div id="search-container" class="search-container">
            <input placeholder="Search Movie List" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit">Search</button>
        </div>
        
        `;

        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);