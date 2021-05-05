import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-blau-container',
  styleUrl: 'designary-blau-container.css',
  shadow: true,
})
export class DesignaryBlauContainer {

  render() {
    return (
      <Host>
       
      <div class="container">
        <div class="gridelement">
          <div class="gridelement2">
            <div class="layout">
              <img width="200" src="src/icons/flying-object.svg"></img>
              
            </div>
          </div>
          <div class="gridelement2">
            <div class="layout">
              <h1 class="layout2">Featured Solutions</h1>
              <h2>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo 
                dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. 
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. </h2>
                <div class="button"><div class="label">Read More</div>
            </div>
            </div>
          </div>
        </div>
        </div>
      </Host>
    );
  }

}
