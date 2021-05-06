import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-teaser',
  styleUrl: 'designary-teaser.css',
  shadow: true,
})
export class DesignaryParallax {
  @Prop() imageurl: string;
  @Prop() title: string;
  @Prop() class: string;
  render() {
    return (
      <Host>

        <div class="container">
          <h2 class="section-title" >Featured Products</h2>
          <div class="row">
          <div class="column">
            <div class="teaserelement">
              <img class="bild" src="src/bilder/tauchen_teaser.jpg"></img>
              <h3 >Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            <designary-button title="See more"></designary-button>
          </div>
          <div class="column">
            <div class="teaserelement">
              <img class="bild" src="src/bilder/portrait_teaser.jpg"></img>
              <h3 >Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            <designary-button title="See more"></designary-button>
          </div>
          <div class="column">
            <div class="teaserelement">
              <img class="bild" src="src/bilder/swan_teaser.jpg"></img>
              <h3 >Lorem ipsum</h3>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p> </div>
            <designary-button title="See more"></designary-button>
          </div>
        </div>
        </div>

      </Host>
    );
  }
}
