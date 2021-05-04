import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-newsletter',
  styleUrl: 'designary-newsletter.css',
  shadow: true,
})
export class DesignaryNewsletter {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
