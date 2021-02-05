import { route, obj2 } from './router';

import  getClasses  from './getClasses';





route('/', 'home', function() {
  this.where = 'here';
});

route('/ex1', 'example1', function() {
  this.title = 'Example 1';
});

route('/ex2', 'example2', function() {
  this.title = 'Example 2';
  this.counter = 0;
  this.$on('.my-button', 'click', () => {
    this.counter += 1;
    this.$refresh();
  });
});


const obj = { a: "alpha", b: "bravo"}
const newObj = { ...obj, c: 'charlie'}
console.log(newObj);
console.log(obj);
getClasses();

route('*', '404', function () {});

console.log(obj2);