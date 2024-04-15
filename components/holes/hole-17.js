import { LitElement, html } from '../../assets/js/lit.js';


export class HoleSeventeen extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 17</h2>
                <div class="par pb-2">Par 3 for Men and Women</div>
                <p class="text">
                The longest par 3 on the course is made more difficult with a bunker guarding the right side of the green.  Most tee shots seem to come up short and to the right on the hole!  There appears to be some magnetic force making tee shots go right!  Everyone including the pros during the Governor’s Open love to make par on this hole!                </p>
                <div class="row">
                  <div class="col col-xl-6">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Black Tees</td>
                          <td>218 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>192 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>179 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>137 Yards</td>
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
                      <td>82 Yards</td>
                    </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-17.jpg" alt="view of seventeen from behind the green"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 17 from behind the green.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-seventeen', HoleSeventeen);