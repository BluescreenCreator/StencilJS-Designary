import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'desingary-slideshow',
  styleUrl: 'desingary-slideshow.css',
})
export class DesingarySlideshow {

  @Prop() containerTitle: string;

  render() {
    return (
      <Host>
          <div id="slider">
            <input type="radio" name="slider" id="slide1" checked></input>
            <input type="radio" name="slider" id="slide2"></input>
            <input type="radio" name="slider" id="slide3"></input>
            <input type="radio" name="slider" id="slide4"></input>
            <div id="slides">
                <div id="overflow">
                  <div class="inner">
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
                      <div class="slide slide_2">
                        <div class="slide-content">
                            <div class="image">
                              <img src="slide2.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>Logo-Design</h2>
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
                      <div class="slide slide_3">
                        <div class="slide-content">
                            <div class="image">
                              <img src="slide3.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>Banner-Ads</h2>
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
                      <div class="slide slide_4">
                        <div class="slide-content">
                            <div class="image">
                              <img src="slide1.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>UX-Design</h2>
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
                  </div>
                </div>
            </div>
            <div id="controls">
                <label htmlFor="slide1"></label>
                <label htmlFor="slide2"></label>
                <label htmlFor="slide3"></label>
                <label htmlFor="slide4"></label>
            </div>
          </div>
      </Host>
    );
  }
}
