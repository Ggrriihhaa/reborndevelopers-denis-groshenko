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
            <input class="menu__toggle" id="menu__toggle" type="checkbox" />
            <label class="menu__btn" htmlFor="menu__toggle">
              <span></span>
            </label>
            <ul class="menu__box">
              <li
                class="menu__item"
                onClick={() => {
                  this.navigateTo("/");
                }}
              >
                Home
              </li>
              <li
                class="menu__item"
                onClick={() => {
                  this.navigateTo("/list");
                }}
              >
                List
              </li>
              <li
                class="menu__item"
                onClick={() => {
                  this.navigateTo("/details");
                }}
              >
                Details
              </li>
              <li
                class="menu__item"
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
