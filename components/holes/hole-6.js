import { LitElement, html } from '../../assets/js/lit.js';


export class HoleSix extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`
    <div class="container contact__form px-lg-5">
        <div class="row d-flex flex-column-reverse flex-lg-row justify-content-between g-0">
              <div class="col col-12 col-lg-5">
                <h2 class="mb-0">Hole 6</h2>
                <div class="par pb-2">Par 3 for Men and Women</div>
                <p class="text">
                This hole was redesigned completely.  Over 1,500 square feet of green was added to the back of the green complex which now stretches the hole out to 167 yards to the middle of the green and close to 180 to a back pin location.  The green speed is quicker than it looks.  Also, beware of the new grass bunker located short right of the green.  When the pin location is right front, the bunker is in play and is absolutely NO FUN!  (Or maybe it's a little bit of fun).                </p>
                <div class="row">
                  <div class="col col-xl-6">
                    <table class="table tee-table">
                      <tbody>
                        <tr>
                          <td class="tees th-sm"><img src="./assets/images/tees/gold.svg" alt="" aria-hidden="true"></td>
                          <td>Black Tees</td>
                          <td>167 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/blue.svg" alt="" aria-hidden="true"></td>
                          <td>Blue Tees</td>
                          <td>139 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/white.svg" alt="" aria-hidden="true" class="white-tees"></td>
                          <td>White Tees</td>
                          <td>128 Yards</td>
                        </tr>
                        <tr>
                          <td class="tees"><img src="./assets/images/tees/red.svg" alt="" aria-hidden="true"></td>
                          <td>Red Tees</td>
                          <td>113 Yards</td>
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
                      <td>102 Yards</td>
                    </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="col col-12 col-lg-6 ">
                <figure class="mb-0">
                  <img src="./assets/images/1_golf_images/holes/Hole-6.jpeg" alt="image of hole six from the tee box"
                    class="rounded img-fluid">
                  <figcaption class="image-caption">
                    View of 6 from the tee box.
                  </figcaption>
                </figure>
              </div>
            </div>
  </div>
    `;
  }
}
customElements.define('hole-six', HoleSix);