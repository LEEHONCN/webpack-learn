import _ from 'lodash';

function component() {
  var element = document.createElement('div');
  element.innerHTML = _.join(['Another', 'module', 'loaded!'], ' ');
  return element;
}

document.body.appendChild(component());