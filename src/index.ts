import Movie from "./class/Movie";
import Cart from "./class/Cart";

const avenger = [2012, 'USA', 'Avengers!', 'fantastic', 137] as const
const movie = new Movie(...avenger)

console.log(movie.getMovie())

const cart = new Cart()

cart.add({id: 1, name: 'Rome', price: 200})
cart.add({id: 2, name: 'Taxi', price: 700})
cart.add({id: 3, name: 'Rose', price: 422})

console.log(cart.getAll())
console.log(cart.getSum())
console.log(cart.getFinalSum(50))
console.log(cart.delItem(2))
