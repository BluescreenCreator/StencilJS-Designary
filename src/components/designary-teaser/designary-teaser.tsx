import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-teaser',
  styleUrl: 'designary-teaser.css',
  shadow: true,
})
export class DesignaryParallax {

  render() {
    return (
      <Host>
        <div class="main">
          <section>
            <div class="wrapper">
              <div class="teaser">
                <ul>
                  <li>
                    <figure>
                      <img src="bilder/delfine.jpg" alt="Delfine" class="bildDelfine"/>
                    </figure>
                    <div class="text">
                      <h3>text</h3>
                      <p>Learn more about it</p>
                      <br></br>
                      <br></br>
                      <a href="#" class="button">See more</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="descriptionDelfine">
                <h3>Discover more!</h3>
                <p class="continuousText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p class="continuousText">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
              </div>
            </div>
          </section>
        </div>
        <br></br>
        <br></br>
        <div class="main">
          <section>
            <div class="wrapper">
              <div class="teaser">
                <ul>
                  <li>
                    <figure>
                      <img src="bilder/ringe.jpg" alt="Ringe" class="bildRinge"/>
                    </figure>
                    <div class="text">
                      <h3>text</h3>
                      <p>Learn more about it</p>
                      <br></br>
                      <br></br>
                      <a href="#" class="button">See more</a>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="descriptionRinge">
                <h3>Discover more!</h3>
                <p class="continuousText">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                <p class="continuousText">Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt.</p>
              </div>
            </div>
          </section>
        </div>
      </Host>
    );
  }
}
