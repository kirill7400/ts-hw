import Movie from "../class/Movie";
import {expect, jest, test} from '@jest/globals';

test('constructor test', () => {
  const result = new Movie(...([2012, 'USA', 'Avengers!', 'fantastic', 137] as const));

  expect(result.getMovie()).toEqual({
    "year": 2012,
    "country": "USA",
    "tagline": "Avengers!",
    "genre": "fantastic",
    "time": 137
  });
});