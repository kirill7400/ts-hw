import Buyable from '../domain/Buyable';

export default class Cart {
  private items: Buyable[] = [];
  private sum: number = 0

  add(item: Buyable): void {
    this.items.push(item);
  }

  getAll(): Buyable[] {
    return [...this.items];
  }

  getSum(): number {
    return this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, this.sum);
  }

  getFinalSum(discount: number): number {
    return (this.items.reduce((accumulator, currentValue) => accumulator + currentValue.price, this.sum)) * (discount / 100);
  }

  delItem(id: number): Buyable[] {
    this.items.forEach((item, index) => {
      item.id === id && this.items.splice(index, 1)
    })
    return this.items
  }
}