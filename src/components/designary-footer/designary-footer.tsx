import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-footer',
  styleUrl: 'designary-footer.css',
  shadow: true,
})
export class DesignaryFooter {

  render() {
    return (
      <Host>

        <br></br>
        <br></br>

        <footer>
          <div class="wrapper">
            <div class="footerLeft">
              <ul class="generalInformation">
                <li><h2>Mockup Company</h2></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur</p></li>
                <li><p>adipiscing elit, sed do eiusmod tempor</p></li>
                <li><p>incididunt ut labore et dolore magna aliqua.</p></li>
                <li><img src="/src/bilder/s_m_icons.png" class="socialMediaIcons" /></li>
              </ul>
            </div>
            <div class="footerMiddle1">
              <h4>Products</h4>
              <ul class="information">
                <li><p>Product 1</p></li>
                <li><p>Product 2</p></li>
                <li><p>Product 3</p></li>
                <li><p>Product 4</p></li>
              </ul>
            </div>
            <div class="footerMiddle2">
              <h4>Services</h4>
              <ul class="resources">
                <li><p>Service 1</p></li>
                <li><p>Service 2</p></li>
                <li><p>Service 3</p></li>
                <li><p>Service 4</p></li>
              </ul>
            </div>
            <div class="footerRight">
              <h4>Resources</h4>
              <ul class="resources">
                <li><p>News</p></li>
                <li><p>Videos</p></li>
                <li><p>Blogs</p></li>
                <li><p>FAQ's</p></li>
              </ul>
            </div>
          </div>
        </footer>
      </Host>
    );
  }

}
