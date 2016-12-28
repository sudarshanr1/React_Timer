var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Test Timer component', function() {
  it('should exist', function() {
    expect(Timer).toExist();
  });

  it('Should set state to started and timer', function(done){
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.count).toBe(0);
    expect(timer.state.countdownStatus).toBe('started');
    setTimeout(function() {
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('Should set state to paused and timer', function(done){
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.countdownStatus).toBe('started');
    setTimeout(function() {
      timer.handleStatusChange('paused');
      done();
    }, 1001);
    setTimeout(function() {
      expect(timer.state.countdownStatus).toBe('paused');
      expect(timer.state.count).toBe(1);
      done();
    }, 3001);
  });

  it('Should stop state and timer', function(done){
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.handleStatusChange('started');
    expect(timer.state.countdownStatus).toBe('started');
    setTimeout(function() {
      timer.handleStatusChange('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 3001);
  });

});
