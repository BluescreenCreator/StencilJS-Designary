import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-testimonial',
  styleUrl: 'designary-testimonial.css',
  shadow: true,
})

export class DesignaryTestimonial {

  @Prop() text: string;
  @Prop() person: string;

  render() {
    return (
      <Host>
        <div class="testimonial-container">
          <div class="greenline"></div>
            <div class="text-container">
              {this.text}
            </div>
          <div class="greenline"></div>
          <div class="customer-container">
              - {this.person}
          </div>
        </div>
      </Host>
    );
  }

}
