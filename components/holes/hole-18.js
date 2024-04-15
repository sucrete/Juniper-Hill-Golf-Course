import { LitElement, html } from "../../assets/js/lit.js";

export class HoleEighteen extends LitElement {
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
            <h2 class="mb-0">Hole 18</h2>
            <div class="par pb-2">Par 4 for Men and Women</div>
            <p class="text">
              This hole sets up to favor the left side of the fairway because
              the contour of the fairway slopes left to right. Any tee shot
              missed to the right results in a difficult approach short with the
              ball below your feet and not being able to see the surface of the
              green. The green is deceptively difficult to putt as there is a
              tendency to over-read the break on this green. This hole should
              give up some birdies but never seems to give up very many! Of
              course, you can say that about almost every hole At The Hill!
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
                      <td>327 Yards</td>
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
                      <td>320 Yards</td>
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
                      <td>307 Yards</td>
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
                      <td>294 Yards</td>
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
                      <td>216 Yards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 ">
            <figure class="mb-0">
              <img
                src="./assets/images/1_golf_images/holes/Hole-18.jpg"
                alt="image of hole eighteen from the tee box"
                class="rounded img-fluid"
              />
              <figcaption class="image-caption">
                View of 18 from the tee box.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-eighteen", HoleEighteen);
