import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'designary-gallery',
  styleUrl: 'designary-gallery.css',
  shadow: true,
})
export class DesignaryGallery {

  render() {
    return (
      <Host>
            <div class="gallery"> 
        <p>
             <img src="/src/bilder/meer.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/surfer.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/portrait.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/ringe.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/struktur.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/rauch.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/delfine.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/Auge.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/marmor.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/nebel.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/wald.jpg" alt="images" width="267" height="267"/>
        <img src="/src/bilder/fuesse.jpg" alt="images" width="267" height="267"/>
        <span id="more">
            
        </span></p>
</div>
      </Host>
    );
    }
  }
