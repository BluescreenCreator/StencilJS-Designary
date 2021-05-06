import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-newsletter',
  styleUrl: 'designary-newsletter.css',
  shadow: true,
})
export class DesignaryNewsletter {

  render() {
    return (
      <Host>
        <div class="newsletter-container">
          Newsletter
          <div class="description-text">You want to learn more about us and our services? <br></br>Just subscribe to our newsletter!</div>
          <div class="component-container"> 
            <input type="email" name="newsletter" placeholder="Email Address"></input>
            <designary-button title="Subscribe"></designary-button>
          </div>
        </div>
      </Host>
    );
  }

}
