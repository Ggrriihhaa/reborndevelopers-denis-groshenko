import { Component, Host, h, Prop } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-navigation',
  styleUrl: 'app-navigation.css',
  shadow: true,
})
export class AppNavigation {

  @Prop() history: RouterHistory;

  navigateTo(path: string) {
    this.history.push(path);
  }

  render() {
    return (
      <Host>
        <ul>
          <li onClick={() => { this.navigateTo('/') }}>Home</li>
          <li onClick={() => { this.navigateTo('/list') }}>List</li>
          <li onClick={() => { this.navigateTo('/details') }}>Details</li>
        </ul>
      </Host>
    );
  }

}

injectHistory(AppNavigation);
