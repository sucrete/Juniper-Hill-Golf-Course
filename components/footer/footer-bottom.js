import { LitElement, html } from '../../assets/js/lit.js';


export class FooterBottom extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    
      
    <div class="col">
            <p class="pt-3 pb-3">City of Frankfort, KY</p>
          </div>
    `;
  }
}
customElements.define('footer-bottom', FooterBottom);