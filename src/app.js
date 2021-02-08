import { route } from './router';
import view1 from '../src/view1.html';
require('../src/main.css');

$(document).ready(function () {



$('head').append(view1)

let arrayEmail =[];

route('/', 'view1', function() {
  this.formTitle = 'Log in';
  this.emailFormLabel = 'Your email address';
  this.passwordFormLabel='Your password';
  this.submit='log in';
  

  this.$on('#email','change', (e)=>{
    console.log(e.target.value)
    let emailValue = e.target.value.trim();
  });

 

  var passwordObj = this.$on('#password','change', (e)=>{
    console.log(e.target.value)
    let passwordValue = e.target.value.trim();return passwordValue
  });


  

  this.$on('#login-form','submit', (event)=>{
    event.preventDefault();
    console.log('submit!');
    console.log(passwordObj)
    console.log(this)
    this.$refresh();
  })
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

route('/ex3', 'example3', function() {
  this.title1 = 'Formularz';
});


route('*', '404', function () {});
});


// import { route } from './router';
// import {view1} from '../src/view1.html';

// $(document).ready(function () {

// // route('/', 'home', function() {
// //   this.where = 'here';
// // });

// $('head').append(view1);


// // $('#app').css('width','50px');
// // $('#app').css('height','50px');
// // $('#app').css('background-color','red');

// // route('/', 'view1', function() {
// //   this.formTitle = 'heredupa';
// //   this.emailFormLabel = 'daga';
// //   this.passwordFormLabel='daga1';
// //   this.submit='submit-button';
// // });

// route('/', 'view1', function() {
//   this.formTitle = 'here';
// });

// route('/ex1', 'example1', function() {
//   this.title = 'Example 1';
// });

// route('/ex2', 'example2', function() {
//   this.title = 'Example 2';
//   this.counter = 0;
//   this.$on('.my-button', 'click', () => {
//     this.counter += 1;
//     this.$refresh();
//   });
// });

// route('/ex3', 'example3', function() {
//   this.title1 = 'Formularz';
// });


// route('*', '404', function () {});



// });