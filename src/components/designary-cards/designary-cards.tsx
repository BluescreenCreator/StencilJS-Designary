import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-cards',
  styleUrl: 'designary-cards.css',
  shadow: true,
})
export class DesignaryCards {

  render() {
    return (
      <Host>

        <div class="container">
          <h2 class="section-title" >What we offer</h2>
          <div class="row">
            <div class="column">
              <div class="card">
                <img class="card-icon" src="src/icons/card-icon1.svg"></img>
                <h3 >Full Service</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            </div>
            <div class="column">
              <div class="card">
                <img class="card-icon" src="src/icons/card-icon2.svg"></img>
                <h3 >Quality</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            </div>
            <div class="column">
              <div class="card">
                <img class="card-icon" src="src/icons/card-icon3.svg"></img>
                <h3 >Flexible & Agile</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            </div>
          </div>
        </div>

      </Host>
    );
  }

}
