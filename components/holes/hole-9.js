import { LitElement, html } from '../../assets/js/lit.js';


export class HoleNine extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 9</h2>
                <div class="par pb-2">Par 4 for Men | Par 5 for Women</div>
                <p class="text">
                Another scenic tee shot which like hole #8 makes you just want to “grip & rip” your tee shot.  Any tee shot missed left, however, can be in trouble with trees and any tee shot blocked to the right will mean the second shot will have to carry the bunker which guards the front right of the green.  Also, for the third straight hole, beware of the front right pin!                </p>
                <div class="row">
                  <div class="col col-xl-6 col-xxl-4">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Black Tees</td>
                          <td>428 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>401 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>353 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>335 Yards</td>
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
                      <td>248 Yards</td>
                    </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-9.jpeg" alt="image of hole nine from behind the green"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of hole 9 from behind the green.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-nine', HoleNine);