import { LitElement, html } from '../../assets/js/lit.js';


export class HoleTen extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 10</h2>
                <div class="par pb-2">Par 3 for Men and Women</div>
                <p class="text">
                While making the turn if you ate a “Power Dog” in the pro shop you will probably hit your next shot 1-2 clubs farther so adjust your club selection.  Otherwise, the prevailing wind will add some uncertainty to the tee shot as well.  Try to start the ball to the right center of the green if possible.                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>178 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>167 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>157 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>147 Yards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-10.jpeg" alt="image of hole ten from the tee box"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 10 from the tee box.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-ten', HoleTen);