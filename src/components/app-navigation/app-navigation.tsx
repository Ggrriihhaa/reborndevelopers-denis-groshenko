import { Component, Host, h, Prop } from "@stencil/core";
import { injectHistory, RouterHistory } from "@stencil/router";

@Component({
  tag: "app-navigation",
  styleUrl: "app-navigation.scss",
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
        {
          <div class="hamburger-menu">
            <input class="menu-toggle" id="menu-toggle" type="checkbox" />
            <label class="menu-btn" htmlFor="menu-toggle">
              <span></span>
            </label>
            <ul class="menu-box">
              <li
                class="menu-item"
                onClick={() => {
                  this.navigateTo("/");
                }}
              >
                Home
              </li>
              <li
                class="menu-item"
                onClick={() => {
                  this.navigateTo("/list");
                }}
              >
                List
              </li>
              <li
                class="menu-item"
                onClick={() => {
                  this.navigateTo("/details");
                }}
              >
                Details
              </li>
              <li
                class="menu-item"
                onClick={() => {
                  this.navigateTo("/contact");
                }}
              >
                Contact
              </li>
            </ul>
          </div>
        }
      </Host>
    );
  }
}

injectHistory(AppNavigation);
