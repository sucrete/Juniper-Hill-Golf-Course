import { LitElement, html } from '../../assets/js/lit.js';


export class HoleThirteen extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 13</h2>
                <div class="par pb-2">Par 4 for Men | Par 5 for Women</div>
                <p class="text">
                During a dry summer golfers are afraid of driving the ball into the creek short of the green.  Those same golfers during a wet spring into the prevailing wind may have to hit a long iron or hybrid for their approach shot.  No hole can play so different depending upon the weather conditions.  A good drive favoring the left side of the fairway makes the approach play much easier but distance control on the downhill approach shot is hard to judge.  There is no bail out.  Any approach short ends up in the creek and any ball landing over the green rolls to or through the OB fence over the green.                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Gold Tees</td>
                          <td>415 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>404 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>379 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>370 Yards</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-13.jpeg" alt="image of hole thirteen, facing the green"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 13, facing the green.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-thirteen', HoleThirteen);