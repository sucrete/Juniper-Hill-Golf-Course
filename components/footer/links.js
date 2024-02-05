import { LitElement, html } from '../../assets/js/lit.js';


export class Links extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="footer__block">
              <div class="footer__block-title">
                <h3>Useful Links</h3>
              </div>
              <div class="footer__block-body">
                <ul class="footer__links">
                  <li class="footer__links-item"><a class="footer__link" href="https://www.jhlgc.org/"
                      target="_blank"><span><i class="fa-solid fa-arrow-right"></i></span> Juniper Ladies Golf Club</a>
                  </li>
                  <li class="footer__links-item"><a class="footer__link" href="https://www.jhga.org/"
                      target="_blank"><span><i class="fa-solid fa-arrow-right"></i></span>Juniper Hill Golf
                      Association</a></li>
                  <li class="footer__links-item"> <a class="footer__link" href="https://www.frankfort.ky.gov/"
                      target="_blank"><span><i class="fa-solid fa-arrow-right"></i></span>
                      City of Frankfort</a></li>
                  <li class="footer__links-item"><a class="footer__link" href="https://www.frankfortkyparksandrec.com/"
                      target="_blank"><span><i class="fa-solid fa-arrow-right"></i></span>
                      Frankfort Parks and Recreation</a></li>

                </ul>
              </div>
            </div>
    `;
  }
}
customElements.define('footer-links', Links);