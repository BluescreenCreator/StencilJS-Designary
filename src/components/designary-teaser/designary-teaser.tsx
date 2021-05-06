import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-teaser',
  styleUrl: 'designary-teaser.css',
  shadow: true,
})
export class DesignaryTeaser {
@Prop() imageurl: string;
@Prop() title: string;
@Prop() class: string;
  render() {
    return (
      <Host>
        <div class="teasercontainer">
          <img src={this.imageurl} alt={this.title} class={this.class}></img>
          <h6>Lorem ipsum</h6>
          <div class="teasertext">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</div>
          <designary-button title="See more"></designary-button>
        </div>
      </Host>
    );
  }
}
