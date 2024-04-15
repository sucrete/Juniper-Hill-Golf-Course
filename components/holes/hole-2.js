import { LitElement, html } from "../../assets/js/lit.js";

export class HoleTwo extends LitElement {
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
            <h2 class="mb-0">Hole 2</h2>
            <div class="par pb-2">Par 4 for Men and Women</div>
            <p class="text">
              If the tee shot on #1 is really difficult it doesn’t get much
              easier on #2 especially for the “hookers”! The out of bounds fence
              which lines the left side of the fairway is an intimidating sight.
              Despite the hole being short in length the fairway is tight and
              the green is hidden over the hill. A small green makes the second
              shot difficult even though the length is short. Any approach shot
              missing the green will probably roll all the way down to the
              fence. The green also putts slightly faster than the other greens.
              While this can be a birdie hole many pros have made double bogeys
              on this hole during the Governor’s Open.
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
                      <td>328 Yards</td>
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
                      <td>325 Yards</td>
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
                      <td>292 Yards</td>
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
                      <td>271 Yards</td>
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
                      <td>182 Yards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 ">
            <figure class="mb-0">
              <img
                src="./assets/images/1_golf_images/holes/Hole-2.jpeg"
                alt="image of hole two from the tee box"
                class="rounded img-fluid"
              />
              <figcaption class="image-caption">
                View of hole 2 from the tee box.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-two", HoleTwo);
