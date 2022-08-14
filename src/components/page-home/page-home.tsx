import { Component, Host, h, Prop } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';

@Component({
  tag: 'page-home',
  shadow: true,
  styleUrl: "page-home.scss",
})
export class PageHome {
  @Prop() history: RouterHistory;

  render() {
    return (
      <Host>
        <h1>HOME</h1>
      </Host>
    );
  } 

}

injectHistory(PageHome) 