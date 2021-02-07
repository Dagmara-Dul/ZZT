import { route } from './router';
import view1 from '../src/view1.html';

$(document).ready(function () {

// route('/', 'home', function() {
//   this.where = 'here';
// });

$('head').append(view1)


$('#app').css('width','50px');
$('#app').css('height','50px');
$('#app').css('background-color','red');

route('/', 'view1', function() {
  this.formTitle = 'heredupa';
  this.emailFormLabel = 'daga';
  this.passwordFormLabel='daga1';
  this.submit='submit';
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