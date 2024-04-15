import { LitElement, html } from "../../assets/js/lit.js";

export class HoleThree extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <div class="container contact__form px-lg-5">
        <div
          class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0"
        >
          <div class="col col-12 col-lg-5">
            <h2 class="mb-0">Hole 3</h2>
            <div class="par pb-2">Par 3 for Men and Women</div>
            <p class="text">
              This new green opened for play in May of 2011. It is one of the
              prettiest par 3’s in Central Kentucky! The green is completely in
              view and invites you to hit the ball right at the pin. Three
              bunkers frame the green and the prevailing wind crosses from the
              golfers right so whether the wind “helps or hurts” your tee shot
              distance is difficult to determine. Also, beware that the green
              putts a little faster going “uphill” than it looks.
            </p>
            <div class="row">
              <div class="col col-xl-6">
                <table class="table tee-table">
                  <tbody>
                    <tr>
                      <td class="tees th-sm">
                        <img
                          src="./assets/images/tees/gold.svg"
                          alt=""
                          aria-hidden="true"
                        />
                      </td>
                      <td>Black Tees</td>
                      <td>171 Yards</td>
                    </tr>
                    <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/blue.svg"
                          alt=""
                          aria-hidden="true"
                        />
                      </td>
                      <td>Blue Tees</td>
                      <td>167 Yards</td>
                    </tr>
                    <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/white.svg"
                          alt=""
                          aria-hidden="true"
                          class="white-tees"
                        />
                      </td>
                      <td>White Tees</td>
                      <td>160 Yards</td>
                    </tr>
                    <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/red.svg"
                          alt=""
                          aria-hidden="true"
                        />
                      </td>
                      <td>Red Tees</td>
                      <td>148 Yards</td>
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
                      <td>95 Yards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 ">
            <figure class="mb-0">
              <img
                src="./assets/images/1_golf_images/holes/Hole-3.jpeg"
                alt="image of hole three"
                class="rounded img-fluid"
              />
              <figcaption class="image-caption">
                View of hole 3 from the tee box.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-three", HoleThree);
