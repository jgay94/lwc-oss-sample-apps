import { createElement } from 'lwc';
import Hello from '../hello';

describe('hello', () => {
  afterEach(() => {
    while (document.body.firstChild) {
      document.body.removeChild(document.body.firstChild);
    }
  });
  
  it('renders greeting', () => {
    // customElements.define('tut-hello', Hello.CustomElementConstructor);
    // const element = document.createElement('tut-hello', { 
    //   is: 'tut-hello' 
    // });
    const element = createElement('tut-hello', {
      is: Hello
    });
    document.body.appendChild(element);
    const div = element.shadowRoot.querySelector('div');
    expect(div.textContent).toBe('Hello, World!');
  });
});