import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-button',
  styleUrl: 'designary-button.css',
  shadow: true,
})

export class DesignaryButton {

  render() {
    return (
      <Host>
        <div class="button1">
          <h2 class="section-title" >Buttons</h2>
        <button type="button">Kontakt</button>
        </div>
        <br></br>
      </Host>
    );
  }
}
