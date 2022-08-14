import { Component, h, Host, Prop } from '@stencil/core';
import { injectHistory, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: true,
})
export class AppRoot {
  @Prop() history: RouterHistory;

  render() {
    return (
      <Host>
        <div>
          <app-navigation></app-navigation>
        </div>
        <div>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/list" component="page-list" />
              <stencil-route url="/details" component="page-details" />
              <stencil-route url="/contact" component="page-contact" />
              <stencil-route component="page-not-found" />
            </stencil-route-switch>
          </stencil-router>
        </div>
      </Host>
    );
  }
}

injectHistory(AppRoot);