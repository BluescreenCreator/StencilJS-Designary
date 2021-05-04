import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-header-hero_section',
  styleUrl: 'designary-header-hero_section.css',
  shadow: true,
})
export class DesignaryHeaderHero_section {

  render() {
    return (
      <Host>
        <header>
          <div class="containerHeader">
            <nav>
              <ul>
                <li><h3 class="designary">Designary</h3></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Solutions</a></li>
                <li><img src="/src/bilder/search_icon.png" class="search" /></li>
                  <button type="button"><a href="#" class="contact">Contact</a></button>
              </ul>
            </nav>
          </div>
          <div class="heroTeaser">
            <h1>Design is the silent</h1>
            <h1>ambassador of your brand</h1>
            <button type="button" class="buttonSmall"><a href="#" class="contact">Contact</a></button>
          </div>
        </header>

        <br></br>
        <br></br>
        <br></br>
      </Host>
    );
  }
}
