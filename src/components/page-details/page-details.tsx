import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-details',
  shadow: true,
})
export class PageDetails {

  render() {
    return (
      <Host>
        <dl>
          <dt>Item 1</dt>
          <dd>Data for item 1</dd>
          <dt>Item 2</dt>
          <dd>Data for item 2</dd>
          <dt>Item 3</dt>
          <dd>Data for item 3</dd>
          <dt>Item 4</dt>
          <dd>Data for item 4</dd>
        </dl>
      </Host>
    );
  }

}
