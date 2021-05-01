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
                            <h2>Web-Design</h2>
                            <p>Content for Slide 1</p>
                            <p>More content</p>
                        </div>
                      </div>
                      <div class="slide slide_2">
                        <div class="slide-content">
                            <h2>Logo-Design</h2>
                            <p>Content for Slide 2</p>
                        </div>
                      </div>
                      <div class="slide slide_3">
                        <div class="slide-content">
                            <h2>Banner-Ads</h2>
                            <p>Content for Slide 3</p>
                        </div>
                      </div>
                      <div class="slide slide_4">
                        <div class="slide-content">
                            <h2>UX-Design</h2>
                            <p>Content for Slide 4</p>
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
            <div id="bullets">
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
