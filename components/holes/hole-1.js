import { LitElement, html } from "../../assets/js/lit.js";

export class HoleOne extends LitElement {
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
            <h2 class="mb-0">Hole 1</h2>
            <div class="par pb-2">Par 4 Men | Par 5 Women</div>
            <p class="text">
              Without a doubt, one of the toughest #1 tees to tee off in the
              world! Not only is the tee in close proximity to the pro shop,
              scoreboard/dining area, as well as the practice green and all the
              accompanying noise which accompanies the closeness of everything
              but as one tees the ball up and looks down the fairway, the middle
              of the fairway is obscured by a giant tree! Added on top of that
              is the pressure of knowing that the pro shop staff may have the PA
              system on and announce your name or critique your opening tee
              shot.
            </p>
            <p class="text">
              Anyhow, once we’ve teed off and hopefully hit the tee shot either
              over or around the tree the hole doesn’t get much easier. A small
              pond protects the last 100 yards to the green and a small two
              level green is hard to hit on your approach shot. It’s important
              to keep the ball toward the middle of the green and on the same
              level as the hole. This is a difficult starting hole and even low
              handicap golfers are glad to make a par here!
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
                          class="white-tees"
                        />
                      </td>
                      <td>Black Tees</td>
                      <td>387 Yards</td>
                    </tr>
                    <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/blue.svg"
                          alt=""
                          aria-hidden="true"
                          class="white-tees"
                        />
                      </td>
                      <td>Blue Tees</td>
                      <td>376 Yards</td>
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
                      <td>371 Yards</td>
                    </tr>
                    <tr>
                      <td class="tees">
                        <img
                          src="./assets/images/tees/red.svg"
                          alt=""
                          aria-hidden="true"
                          class="white-tees"
                        />
                      </td>
                      <td>Red Tees</td>
                      <td>366 Yards</td>
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
                      <td>276 Yards</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="col col-12 col-lg-6 ">
            <img
              src="./assets/images/1_golf_images/holes/Hole-1.jpeg"
              alt="image of hole one"
              class="rounded img-fluid"
            />
          </div>
        </div>
      </div>
    `;
  }
}
customElements.define("hole-one", HoleOne);
