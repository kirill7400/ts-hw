import Cart from "../class/Cart";
import {expect, jest, test} from '@jest/globals';

test('functions test', () => {
  const result = new Cart();

  result.add({id: 1, name: 'Rome', price: 200})
  result.add({id: 2, name: 'Taxi', price: 700})
  result.add({id: 3, name: 'Rose', price: 422})

  expect(result.getAll()).toEqual([{"id": 1, "name": "Rome", "price": 200}, {"id": 2, "name": "Taxi", "price": 700}, {"id": 3, "name": "Rose", "price": 422}]);
  expect(result.getSum()).toBe(1322);
  expect(result.getFinalSum(50)).toBe(661);
  expect(result.delItem(2)).toEqual([{"id": 1, "name": "Rome", "price": 200}, {"id": 3, "name": "Rose", "price": 422}]);
});