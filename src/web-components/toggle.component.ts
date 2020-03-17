import { LitElement, html, css } from 'lit-element';

export class ToggleComponent extends LitElement {
  private disabled: boolean;

  static get styles() {
    return css`
      :host {
        display:block;
        background-color:lightblue;
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
      <span>test</span>
    `;
  }

  onClick(e: MouseEvent) {
    // this.dispatchEvent(new CustomEvent('event-name'));
  }  
}
