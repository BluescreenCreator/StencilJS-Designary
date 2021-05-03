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
        <slot></slot>
      </Host>
    );
  }

}
