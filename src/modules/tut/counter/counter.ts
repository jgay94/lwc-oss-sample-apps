import { LightningElement } from 'lwc';

export default class Counter extends LightningElement {
  name = 'Joseph'
  count = 0

  incrementCount() {
    this.count++
  }

  decrementCount() {
    this.count--
  }

  get person(): Person {
    return {
      name: this.name,
      age: this.count,
    }
  }
}
