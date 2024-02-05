import { LitElement, html } from '../../assets/js/lit.js';


export class HoleSixteen extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 16</h2>
                <div class="par pb-2">Par 4 for Men and Women</div>
                <p class="text">
                This is an intimidating tee shot with out of bounds left and trees to the right.  Even with a good tee shot a blind and uphill approach shot is difficult to judge distance on.  Any ball hit to the left and past the pin is almost impossible to get down in two.  The approach shot needs to stay to the right of the pin.  Putting on this green will cause most adults to begin looking for an adult beverage soon!  A par is a good score here.                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>380 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>372 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>349 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>288 Yards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-16.jpg" alt="image of hole 16 from the tee box"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    Hole 16 from the tee box.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-sixteen', HoleSixteen);