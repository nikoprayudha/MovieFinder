class AppBar extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
    }

    connectedCallback() {
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
        
        :host {
            display: block;
            height: 90px;
            width: 100%;
            background: #000000;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            color: white;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }
        
        .jumbotron {
            background: #fe8c00;  /* fallback for old browsers */
            background: -webkit-linear-gradient(to top, #f83600, #fe8c00);  /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to top, #f83600, #fe8c00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            color: #fff;
            height:555px;
        }
    
        h1 {
            padding:5px;
        }

        h2{
            padding:30px;           
        }
        img {
            width:150px;
            height:150px;
        }
        .zoom {
            transition: transform .1s; /* Animation */
            width: 180px;
            height: 180px;
            margin: 0 auto;
        }
        .zoom:hover {
            transform: scale(1.2); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        }
        /* app bar end  */
        

        </style>
        <h2>Movie Finder</h2>

        <div class="jumbotron" align="center">
        <h1>Movie imdb</h1> 
        <p>We specialize in movie world</p> 
        <img src="../../images/logo.png" class="zoom">
        </div>

        `;




    }
}

customElements.define("app-bar", AppBar);