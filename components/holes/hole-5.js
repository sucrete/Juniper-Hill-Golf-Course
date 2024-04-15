import { LitElement, html } from '../../assets/js/lit.js';


export class HoleFive extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 5</h2>
                <div class="par pb-2">Par 4 for Men and Women</div>
                <p class="text">
                This is an awkward ‘blind” tee shot.  Tee shots landing 150 yards or so closer to the green will kick left into the rough.  However, the out of bounds fence on the right prevents anyone from hugging the right side too closely.  The approach shot is to a small two tiered green which is very difficult to putt and even more difficult to chip to particularly from the right side.  The back tier of the green is very fast from right to left!                </p>
                <div class="row">
                  <div class="col col-xl-6">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Black Tees</td>
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
                        <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/wildcats.png"
                          alt=""
                          aria-hidden="true"
                          class="white-tees"
                        />
                      </td>
                      <td>Wildcat Tees</td>
                      <td>209 Yards</td>
                    </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-5.jpg" alt="image of hole five from the tee box"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 5 from the tee box.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-five', HoleFive);