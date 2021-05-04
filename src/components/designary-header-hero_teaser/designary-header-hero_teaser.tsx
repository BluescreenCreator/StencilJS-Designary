import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-header-hero_teaser',
  styleUrl: 'designary-header-hero_teaser.css',
  shadow: true,
})
export class DesignaryHeaderHero_teaser {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
