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
            <img src="/src/bilder/meer.jpg" alt="Meer" width="267" height="267" /> 
            <img src="/src/bilder/surfer.jpg" alt="Surfer" width="267" height="267" />
            <img src="/src/bilder/portrait.jpg" alt="Portrait" width="267" height="267" />
            <img src="/src/bilder/ringe.jpg" alt="Ringe" width="267" height="267" />
            <img src="/src/bilder/struktur.jpg" alt="Struktur" width="267" height="267" />
            <img src="/src/bilder/rauch.jpg" alt="Rauch" width="267" height="267" />
            <img src="/src/bilder/delfine.jpg" alt="Delfine" width="267" height="267" />
            <img src="/src/bilder/Auge.jpg" alt="Auge" width="267" height="267" />
            <img src="/src/bilder/marmor.jpg" alt="Marmor" width="267" height="267" />
            <img src="/src/bilder/nebel.jpg" alt="Nebel" width="267" height="267" />
            <img src="/src/bilder/wald.jpg" alt="Wald" width="267" height="267" />
            <img src="/src/bilder/fuesse.jpg" alt="Fuesse" width="267" height="267" />
            <span id="more">
              <img src="/src/bilder/blatt.jpg" alt="images" width="267" height="267" />
              <img src="/src/bilder/frau.jpg" alt="images" width="267" height="267" />
              <img src="/src/bilder/tunnel.jpg" alt="images" width="267" height="267" />
              <img src="/src/bilder/rauch2.jpg" alt="images" width="267" height="267" />
              <img src="/src/bilder/swan.jpg" alt="images" width="267" height="267" />
              <img src="/src/bilder/tauchen.jpg" alt="images" width="267" height="267" />
            </span></p>
        </div>
      </Host>
    );
    }
  }