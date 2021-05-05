import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-teaser',
  styleUrl: 'designary-teaser.css',
  shadow: true,
})
export class DesignaryParallax {

  render() {
    return (
      <Host>
        <div class="teasercontainer">
          <img src="src/bilder/delfine.jpg" alt="Delfine" class="bildDelfine"></img>
          <div class="teasertext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
          <designary-button title="See more"></designary-button>
        </div>
      </Host>
    );
  }
}
