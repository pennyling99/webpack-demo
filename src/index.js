import _ from 'lodash';
import './style.css';
import Vue from 'vue';

// document.getElementById('app').innerHTML = 'Hello, webpack lala';

const vm = new Vue({
  el: '#app',
  template: `<div id="app">{{message}}</div>`,
  data: {
    message: 'Hello Vue',
  },
});
