import { route } from './router';
import view1 from '../src/view1.html';
require('../src/main.css');

$(document).ready(function () {

$('head').append(view1)

route('/', 'view1', function() {
  this.formTitle = 'Welcome';
  this.emailFormLabel = 'Email';
  this.passwordFormLabel='Password';
  this.submit='log in';
  

  this.$on('#email','change', (e)=>{
    console.log(e.target.value)
    let emailValue = e.target.value.trim();
  });


  var passwordObj = this.$on('#password','change', (e)=>{
    console.log(e.target.value)
    let passwordValue = e.target.value.trim();
  });
  

  this.$on('#login-form','submit', (event)=>{
    event.preventDefault();
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