import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-button',
  styleUrl: 'designary-button.css',
  shadow: true,
})

export class DesignaryButton {
@Prop() color: string;
@Prop() size: string;
@Prop() title: string;
  render() {
    return (
      <Host>
        <button class={this.color+' '+ this.size} type="button">{this.title}</button>
      </Host>
    );
  }
}
