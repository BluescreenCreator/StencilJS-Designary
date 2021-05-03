import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-gallery',
  styleUrl: 'designary-gallery.css',
  shadow: true,
})
export class DesignaryGallery {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
