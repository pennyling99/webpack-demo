import _ from 'lodash';
import './style.css';
import Vue from 'vue';
import App from './App.vue';

// document.getElementById('app').innerHTML = 'Hello, webpack lala';

const vm = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue',
  },
  render: (h) => h(App),
});
