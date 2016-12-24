var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');
describe('Clock', function() {
  it('Should exist', function() {
    expect(Clock).toExist();
  });
  describe('Render', function() {
    it('Should render clock', function(){
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:02');
    });
  });
  describe('Should test formatSeconds method', function(){
    it('formatSeconds', function() {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 650;
      var expected = "10:50";
      var output = clock.formatSeconds(seconds);
      expect(output).toBe(expected);
    });
    it('formatSeconds - 2', function() {
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      var seconds = 61;
      var expected = "01:01";
      var output = clock.formatSeconds(seconds);
      expect(output).toBe(expected);
    });
  });

});
