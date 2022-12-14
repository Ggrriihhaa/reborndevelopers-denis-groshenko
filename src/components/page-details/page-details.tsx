import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "page-details",
  shadow: true,
  styleUrl: "page-details.scss",
})
export class PageDetails {
  render() {
    return (
      <Host>
        <h2>Detales</h2>
          <dl>
            <div>
              <dt>Item 1</dt>
              <dd>Data for item 1</dd>
            </div>
            <div>
              <dt>Item 2</dt>
              <dd>Data for item 2</dd>
            </div>
            <div>
              <dt>Item 3</dt>
              <dd>Data for item 3</dd>
            </div>
            <div>
              <dt>Item 4</dt>
              <dd>Data for item 4</dd>
            </div>
          </dl>
      </Host>
    );
  }
}
