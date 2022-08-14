import { Component, Host, h, Prop } from "@stencil/core";
import { injectHistory, RouterHistory } from "@stencil/router";

@Component({
  tag: "page-contact",
  styleUrl: "page-contact.scss",
  shadow: true,
})
export class PageContact {
  @Prop() history: RouterHistory;

  render() {
    return (
      <Host>
        <h2>Send a Letter</h2>
        <form class="example_form">
          <div>Name</div>
          <input type="text" name="name"></input>
          <div>Email</div>
          <input type="email" name="email"></input>
          <div>Message</div>
          <textarea name="message"></textarea>
          <input
            class="submit_btn"
            type="submit"
            name="submit_btn"
            value="Submit"
          ></input>
        </form>
      </Host>
    );
  }
}

injectHistory(PageContact);
