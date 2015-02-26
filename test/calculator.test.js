'use strict';

/*
 * Unit tests for lib/calculator.js
 */

describe('Calculator', function() {

  var page = {};

  // inject the basic HTML elements
  beforeEach(function() {
    var markup = '<input id="x" type="text">' + 
      '<input id="y" type="text">' + 
      '<input id="add" type="button" value="Add Numbers">' +
      'Result: <span id="result" />';

    document.body.insertAdjacentHTML(
      'afterbegin', 
      markup);
  });

  // init page façade
  beforeEach(function() {
    page = {
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
  });

  // call the init function of calculator to register DOM elements
  beforeEach(function() {
    window.calculator.init();
  });

  it('should calculate 3 for 1 + 2', function() {
    page.x = 1;
    page.y = 2;
    page.clickAdd();
    page.result.should.equal('3');
  });

  it('should calculate zero for invalid x value', function() {
    page.x = 'hello';
    page.y = 2;
    page.clickAdd();
    page.result.should.equal('0');
  });

  it('should calculate zero for invalid y value', function() {
    page.x = 1;
    page.y = 'goodbye';
    page.clickAdd();
    page.result.should.equal('0');
  });

});