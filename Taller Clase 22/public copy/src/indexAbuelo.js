import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}


	connectedCallback() {
		this.render();
	}

	render() {
		this.shadowRoot.innerHTML = `
     <style>
        .card-container {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
    </style>
    <div class= "home"> <h1>My nintendo store</h1>
    </div>
   
    <div class="card-container">
    <nintendo-card
      img="https://http2.mlstatic.com/D_NQ_NP_783063-MLU74273802532_022024-O.webp"
      alt="New Collection Zelda figures"
      title="The Legend of Zelda"
      description="Boost your game with the amiibo from the legend of Zelda collection"
      txtbutton="Complete your collection"
      
    ></nintendo-card>


    <nintendo-card
      img="https://i5.walmartimages.com/asr/104bbeec-6a0f-4535-bb55-1eb756c0fcd6.01e126edf73d138825c47e73775caefa.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
      alt="nintendo 64 controller"
      title="nintendo 64 controller"
      description="Enjoy Nintendo 64 games the way they were meant to be played: with a full-size Nintendo 64 wireless controller!"
      txtbutton="Buy Now">
      </nintendo-card>
        </div>
    `;
	}
}

customElements.define('card-container', AppContainer);
