var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');
describe('Test CountdownForm', function(){
  it('Test exists', function(){
    expect(CountdownForm).toExist();
  });

  it('should call onSetCountDown if valid seconds entered', function(){
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '109';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  it('should not call onSetCountDown if invalid seconds entered', function(){
    var spy = expect.createSpy();
    var countdownForm = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(countdownForm));
    countdownForm.refs.seconds.value = '';
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled('');
  });
});
