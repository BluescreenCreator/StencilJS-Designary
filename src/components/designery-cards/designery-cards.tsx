import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designery-cards',
  styleUrl: 'designery-cards.css',
  shadow: true,
})
export class DesigneryCards {

  render() {
    return (
      <Host>
        <div class="container"></div>
        <h2 class="section-title" >Cards</h2>
        <div class="row">
          <div class="column">
            <div class="card">
            <img class="card-icon" src="src/icons/card-icon1.svg"></img>
        <h3 >1</h3>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
        </div>
          <div class="column">
        <div class="card">
                <img class="card-icon" src="src/icons/card-icon2.svg"></img>
          <h3 >2</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
      </div>
      <div class="column">
        <div class="card">
                <img class="card-icon" src="src/icons/card-icon3.svg"></img>
          <h3 >3</h3>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
      </div>
    </div>  
      </Host>
    );
  }

}
