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
        <footer>
          <div class="wrapper">
            <div class="footerLeft">
              <ul class="generalInformation">
                <li><h3>Apollon</h3></li>
                <li><p>Lorem ipsum dolor sit amet, consectetur</p></li>
                <li><p>adipiscing elit, sed do eiusmod tempor</p></li>
                <li><p>incididunt ut labore et dolore magna aliqua.</p></li>
                <li><img src="1x/social_media_icons.png"/></li>
                  <li><p>© Apollon 2021  All Rights Reserved.</p></li>
            </ul>
            </div>
              <div class="footerMiddle">
                <h4>Information</h4>
                <ul class="information">
                  <li><p>Privacy policy</p></li>
                  <li><p>Terms of service</p></li>
                  <li><a href="#" class="help">Contact us</a></li>
                </ul>
              </div>
              <div class="footerRight">
                <h4>Resources</h4>
                <ul class="resources">
                  <li><p>News</p></li>
                  <li><p>Videos</p></li>
                  <li><p>FAQ's</p></li>
                </ul>
              </div>
            </div>
</footer>   
      </Host>
    );
  }

}
