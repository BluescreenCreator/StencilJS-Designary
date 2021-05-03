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
        <div class="button">
        <button type="button"><a href="#">Contact</a></button>
        </div>
        <div class="button">
        <button type="button" class="smallButton"><a href="#">Contact</a></button>
        </div>
      </Host>
    );
  }
}
