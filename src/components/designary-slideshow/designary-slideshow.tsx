import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-slideshow',
  styleUrl: 'designary-slideshow.css',
  shadow: true,
})
export class DesignarySlideshow {

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
                              <img src="src/bilder/slide1.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>Web-Design</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <div class="readmore">Read more</div>
                        </div>
                        </div>   
                      </div>
                      <div class="slide slide_2">
                        <div class="slide-content">
                            <div class="image">
                              <img src="src/bilder/slide2.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>Logo-Design</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <div class="readmore">Read more</div>
                            </div>
                        </div>
                      </div>
                      <div class="slide slide_3">
                        <div class="slide-content">
                            <div class="image">
                              <img src="src/bilder/slide3.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>Banner-Ads</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <div class="readmore">Read more</div>
                            </div>
                        </div>
                      </div>
                      <div class="slide slide_4">
                        <div class="slide-content">
                            <div class="image">
                              <img src="src/bilder/slide2.png" class="picture"></img>
                            </div>
                            <div class="text">
                            <h2>UX-Design</h2>
                            <br></br>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            <div class="readmore">Read more</div>
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
            <div id="bullets">
                <label htmlfor="slide1"></label>
                <label htmlfor="slide2"></label>
                <label htmlfor="slide3"></label>
                <label htmlfor="slide4"></label>
          </div>
          </div>
      </Host>
    );
  }

}
