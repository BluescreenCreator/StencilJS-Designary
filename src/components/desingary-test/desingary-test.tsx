import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'desingary-test',
  styleUrl: 'desingary-test.css',
  shadow: true,
})
export class DesingaryTest {

  render() {
    return (
      <Host>
        <div class="slide slide_1">
          <div class="slide-content">
            <div class="image">
                <img src="slide1.png" class="picture"></img>
            </div>
              <div class="text">
               <h2>Web-Design</h2>
               <br></br>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                 <p>tempor incididunt ut labore et dolore magna aliqua erat, sed diam</p>
                 <p>voluptua. At vero eos et accusam et justo duo.</p>
                <br></br>
                <br></br>
                 <p>Read more</p>
             </div>
          </div>   
        </div>
      </Host>
    );
  }

}
