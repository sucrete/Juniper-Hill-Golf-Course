import { LitElement, html } from '../../assets/js/lit.js';


export class Contact extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    
      
    <div class="footer__block">
              <div class="footer__block-title">
                <h3>Contact info</h3>
              </div>
              <div class="footer__block-body">
                <ul class="footer__info">
                  <li class="footer__info-item">
                    <span><i class="fa-solid fa-phone"></i></span>
                    <a href="tel:5028758559" target="_blank"> <span>(502)
                        875-8559</span></a>
                  </li>
                  <li class="footer__info-item">
                    <span><i class="fa-solid fa-location-dot"></i></span>
                    <a href="https://www.google.com/maps/place/800+Louisville+Rd,+Frankfort,+KY+40601/@38.1870876,-84.8920689,17z/data=!3m1!4b1!4m6!3m5!1s0x884274dd1fb67c8f:0x4499abf3494d7f04!8m2!3d38.1870834!4d-84.889494!16s%2Fg%2F11nfsfvnh5?entry=ttu"
                      target="_blank"> 800 Louisville Rd.<br> Frankfort, KY 40601</a>
                  </li>
                </ul>
              </div>
            </div>
    `;
  }
}
customElements.define('footer-contact', Contact);