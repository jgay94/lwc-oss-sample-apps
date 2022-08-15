import { api, LightningElement } from 'lwc';

interface ICounter {
  name: string;
  count: number;
  person: Person;
  incrementCount: () => void;
  decrementCount: () => void;
}

export default class Counter extends LightningElement implements ICounter {
  @api name = 'Joseph'
  @api count = 0

  @api
  get person() {
    return {
      name: this.name,
      age: this.count,
    }
  }

  incrementCount() {
    this.count++
  }

  decrementCount() {
    this.count--
  }
}
