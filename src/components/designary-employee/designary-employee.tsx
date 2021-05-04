import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'designary-employee',
  styleUrl: 'designary-employee.css',
  shadow: true,
})
export class DesignaryEmployee {

  @Prop() name: string;
  @Prop() job: string;
  @Prop() imageurl: string;
  @Prop() icon1: string;
  @Prop() icon2: string;
  @Prop() icon3: string;


  render() {

    return (
      <Host>
        <div class="employee-container">
          <div class="image">
            <img src={this.imageurl} alt={this.name}></img>
          </div>
          <div class="text-container">
            <div class="name-container">{this.name}</div>
            <div class="job-container">{this.job}</div>
          </div>
        </div>
      </Host>
    );
  }

}
