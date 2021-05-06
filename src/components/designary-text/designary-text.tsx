import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-text',
  styleUrl: 'designary-text.css',
  shadow: true,
})
export class DesignaryText {

  render() {
    return (
      <Host>

        <div class="container">
          <div class="layout"></div>
        </div>
          <div class="layout">
            <h1 class="layout2">Product Spotlight</h1>
            <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
            <div class="button"><div class="label">Read More</div>
            </div>
          </div>
      </Host>
    );
  }

}

