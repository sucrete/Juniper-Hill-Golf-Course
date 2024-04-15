import { LitElement, html } from "../../assets/js/lit.js";

export class HoleEight extends LitElement {
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
            <h2 class="mb-0">Hole 8</h2>
            <div class="par pb-2">Par 5 for Men and Women</div>
            <p class="text">
              This scenic par 5 just invites you to step up and “rip it” off the
              tee. However, any drive drifting right can bounce further right
              into some trouble. The approach shot(s) into the green always
              plays longer than the yardage particularly from the right side of
              the fairway. Just like hole #7 beware of the front right pin
              position!
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
                      <td>486 Yards</td>
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
                      <td>461 Yards</td>
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
                      <td>442 Yards</td>
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
                      <td>410 Yards</td>
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
                      <td>274 Yards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 ">
            <figure class="mb-0">
              <img
                src="./assets/images/1_golf_images/holes/Hole-8.jpeg"
                alt="image of hole eight from the tee box"
                class="rounded img-fluid"
              />
              <figcaption class="image-caption">
                View of 8 from the tee box.
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-eight", HoleEight);
