'use strict';

/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  // API for interacting with the page.
  var controls =  {
    get result() {
      return document.getElementById('result').innerHTML;
    },
    get x() {
      return document.getElementById('x').value;
    },
    set x(val) {
      document.getElementById('x').value = val;
    },
    get y() {
      return document.getElementById('y').value;
    },
    set y(val) {
      document.getElementById('y').value = val;
    },
    clickAdd: function() {
      document.getElementById('add').click();
    }
  };

  // inject the HTML fixture for the tests
  beforeEach(function() {
    var fixture = '<div id="fixture">' +
      '<input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" />' + 
      '</div>';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      fixture);
  });

  // remove the html fixture from the DOM
  afterEach(function() {
    document.body.removeChild(document.getElementById('fixture'));
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  it('should calculate 3 for 1 + 2', function() {
    controls.x = 1;
    controls.y = 2;
    controls.clickAdd();
    expect(controls.result).toBe('3');
  });

  it('should calculate zero for invalid x value', function() {
    controls.x = 'hello';
    controls.y = 2;
    controls.clickAdd();
    expect(controls.result).toBe('0');
  });

  it('should calculate zero for invalid y value', function() {
    controls.x = 1;
    controls.y = 'goodbye';
    controls.clickAdd();
    expect(controls.result).toBe('0');
  });

});