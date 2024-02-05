import { LitElement, html } from '../../assets/js/lit.js';


export class HoleEleven extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 11</h2>
                <div class="par pb-2">Par 4 for Men | Par 5 for Women</div>
                <p class="text">
                This is an awkward tee shot.  The OB fence on the left cuts in a little the farther up you go so long hitters need to be careful not to pull their tee shot.  Also, a little swale short of the green makes distance deceiving on the second shot and adds difficulty to club selection.  Any approach shot missing the green long or to either side is a very difficult up and down.  A par is always a great score here.                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>444 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>428 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>418 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>403 Yards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-11.jpg" alt="image of hole eleven from the tee box"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 11 from the tee box.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-eleven', HoleEleven);