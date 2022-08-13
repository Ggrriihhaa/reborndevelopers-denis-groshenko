import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-list',
  shadow: true,
})
export class PageList {

  items: any[] = [
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 100, title: 'Item 1', description: 'Description for first item' },
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 120, title: 'Item 2', description: 'Lorem Ipsum\'s are great' },
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 300, title: 'Item 3', description: 'Once upon a time...' },
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 10, title: 'Another one', description: 'I like coding in Cobol' },
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 150, title: 'Another tWo', description: 'There is 42' },
    { img: 'https://fakeimg.pl/30x30/000%2C128/', value: 200, title: 'Last item from the lsit', description: 'The Answer' },
  ];

  render() {
    return (
      <Host>
        <ul>
          { this.items.map((item: any) =>
            <li>
              <img src="https://fakeimg.pl/30/"></img>
              <h4>Title</h4>
              <p>Description for first item</p>
            </li>
          )}
        </ul>
      </Host>
    );
  }

}
