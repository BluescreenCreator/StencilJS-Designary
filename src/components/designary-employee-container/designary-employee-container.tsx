import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-employee-container',
  styleUrl: 'designary-employee-container.css',
  shadow: true,
})
export class DesignaryEmployeeContainer {

  @Prop() containerTitle: string;

  render() {
    return (
      <Host>
        <div class="grey-container">
          {this.containerTitle}
          <div class="greyline"></div>
          <div class="component-container"> 
            <div class="slot-container">  
              <slot name="first-component"></slot>
            </div>
            <div class="slot-container">
              <slot name="second-component"></slot>
            </div>
            <div class="slot-container">
              <slot name="third-component"></slot>
            </div>
            <div class="slot-container">
              <slot name="fourth-component"></slot>
            </div>
            <div class="slot-container">
              <slot name="fifth-component"></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }

}