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
        <button type="button"><a href="#">Contact</a></button>
        </div>
        <br></br>
        <div class="button2">
        <button type="button" class="smallButton"><a href="#">Contact</a></button>
        </div>
      </Host>
    );
  }
}
