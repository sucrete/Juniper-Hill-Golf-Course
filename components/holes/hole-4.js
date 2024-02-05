import { LitElement, html } from '../../assets/js/lit.js';


export class HoleFour extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 4</h2>
                <div class="par pb-2">Par 4 for Men and Women</div>
                <p class="text">
                A bunker renovation three years ago added bunkers guarding both the front right and front left of the green to defend itself against long hitters trying to drive the green. Everything seems to bounce or lean from right to left on this hole so favor right center off the tee and keep your approach shot landing to the right of the hole and the ball should bounce toward your target.                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>355 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>348 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>334 Yards</td>
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
                  <img src="./assets/images/1_golf_images/holes/Hole-4.jpeg" alt="image of hole four from behind the green"
                    class="rounded img-fluid">
                    <figcaption class="image-caption">
                    View of hole 4 from behind the green.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-four', HoleFour);