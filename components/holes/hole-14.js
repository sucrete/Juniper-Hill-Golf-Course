import { LitElement, html } from '../../assets/js/lit.js';


export class HoleFourteen extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 14</h2>
                <div class="par pb-2">Par 4 for Men and Women</div>
                <p class="text">
                A blind tee shot with a right to left hole shape while the ground slopes left to right to make the shot difficult. Any approach shot missing the green left or long is impossible to get up and down and bunkers guard the front left and right. This two-tier green is extremely difficult to putt. Beware of any pin position on the second tier and doubly beware any pin position on the right side of the second tier! Actually, beware of ANY pin position on this green!!!                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>345 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>325 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>323 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>315 Yards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-14.jpg" alt="image of hole fourteen from the cart path" 
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    Hole 14 from the cart path.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-fourteen', HoleFourteen);