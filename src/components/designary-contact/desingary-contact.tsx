import { Component, Host, h, Prop } from '@stencil/core' ;

@Component({
    tag: 'designary-contact',
    styleUrl : 'designary-contact.css'
})

export class DesignaryContact {
    
  @Prop() containerTitle: string;

  render() {
      return (
          <Host>
            <div class="contact">
              <h1 class="getintouch">Get In Touch</h1>
                <div class="location">
                  <img class="locationicon" src="src/icons/location-icon.png"></img>
                  <h2 class="locationtext">Beispoelstraße 1, 12345 Musterstadt</h2>
                </div>
                <div class="phone">
                  <img class="phoneicon" src="src/icons/phone-icon.png"></img>
                  <h2 class="phonetext">(+1) 123 456 7890</h2>
                </div>
                <div class="mobile">
                  <img class="mobileicon" src="src/icons/phone-icon.png"></img>
                  <h2 class="mobiletext">(+1) 098 765 4321</h2>
                </div>
                  <div class="inputs">
                    <input class="name" type="text" placeholder="Name"></input>
                    <input class="email" type="email" placeholder="Email Address"></input>
                    <input class="message" type="text" placeholder="Write your Message here"></input>
                  </div>
                    <button>Send</button>
              </div>
        </Host>
      );
    }
}