import { LitElement, html, css } from 'lit-element';

export class ToggleComponent extends LitElement {
  private disabled: boolean;

  static get styles() {
    return css`
      :host {
        background: #d9e8eb;
        display: flex;
        align-items: center;
        border-radius: 0.5rem;
        padding: 0.25rem;
        height: 2rem;
      }

      .btn {
        flex: 1;
        z-index: 1;
        display: inline-block;
        padding: 0.125rem 0.5rem;
        position: relative;
        text-align: center;
        transition: background 600ms ease, color 600ms ease;
      }

      input[type="radio"].toggle {
        display: none;
      }

      input[type="radio"].toggle + label {
          cursor: pointer;
          color: #797979;
      }

      input[type="radio"].toggle + label:after {
        background: #87b5c1;
        border-radius: 8px;
        content: "";
        height: 100%;
        position: absolute;
        top: 0;
        transition: left 200ms cubic-bezier(0.77, 0, 0.175, 1);
        width: 100%;
        z-index: -1;
      }

      input[type="radio"].toggle.toggle-left + label:after {
        left: 100%;
      }

      input[type="radio"].toggle.toggle-right + label:after {
        left: -100%;
      }

      input[type="radio"].toggle:checked + label {
        z-index: 2;
        cursor: default;
        color: #fff;
        transition: color 200ms;
      }

      input[type="radio"].toggle:checked + label:after {
        left: 0;
      }`;
  }

  static get properties() {
    return {
      disabled: { type: Boolean },
    };
  }
  
  constructor() {
    super();
    this.disabled = false;
  }

  render() {
    return html`
      <input id="toggle-on" class="toggle toggle-left" name="toggle" type="radio" value="0">
      <label for="toggle-on" class="btn">on</label>
      <input id="toggle-off" class="toggle toggle-right" name="toggle" type="radio" value="1" checked>
      <label for="toggle-off" class="btn">off</label>
    `;
  }

  onClick(e: MouseEvent) {
    // this.dispatchEvent(new CustomEvent('event-name'));
  }  
}
