import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-testimonial',
  styleUrl: 'designary-testimonial.css',
  shadow: true,
})

export class DesignaryTestimonial {

  @Prop() text: string;
  @Prop() person: string;
  @Prop() brand: string;

  render() {
    return (
      <Host>
        <div class="testimonial-container">
          <div class="greenline"></div>
            <div class="testimonial-main">
              <div class="signs"></div>
              <div class="text-container">
                {this.text}
              </div>
            </div>
          <div class="greenline"></div>
          <div class="customer-container">
              ~ {this.person}, {this.brand}
          </div>
        </div>
      </Host>
    );
  }

}
