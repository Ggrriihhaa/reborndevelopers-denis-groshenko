import { Component, Host, getAssetPath, h } from '@stencil/core';

@Component({
  tag: 'page-not-found',
  styleUrl: 'page-not-found.scss',
  assetsDirs: ['assets']
})
export class PageNotFound {
  render() {
    return (
      <Host>
        <div class='error'>
          <img src={getAssetPath(`./assets/stop_man.svg`)} />
          <div class='error-message'>404 PAGE NOT FOUND</div>
        </div>
      </Host>
    );
  }

}
