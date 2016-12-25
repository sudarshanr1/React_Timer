var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Test countdown component', function() {
  it('should exist', function() {
    expect(Countdown).toExist();
  });

  describe('handleSetCountdown', function() {
    it('Should set state to started and countdown', function(done){
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleSetCountdown(10);
      expect(countDown.state.count).toBe(10);
      expect(countDown.state.countdownStatus).toBe('started');
      setTimeout(function() {
        expect(countDown.state.count).toBe(9);
        done();
      }, 1001);
    });

    it('Should set count to 0', function(done){
      var countDown = TestUtils.renderIntoDocument(<Countdown/>);
      countDown.handleSetCountdown(1);
      setTimeout(function() {
        expect(countDown.state.count).toBe(0);
        done();
      }, 3001);
    });
  });
});
