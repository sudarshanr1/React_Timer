var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');
var Countdown = React.createClass({
  getInitialState: function() {
    return {count:0,countdownStatus: 'stopped'};
  },
  componentDidUpdate: function(prevProps, prevState) {
      if(this.state.countdownStatus !== prevState.countdownStatus) {
        switch (this.state.countdownStatus) {
          case 'started':
          this.startTimer();
          break
          case 'stopped':
          this.setState({count:0});
          case 'paused':
          clearInterval(this.timer);
          break;
        }
      }
  },
  componentWillUpdate: function(nextProps, nextState) {
    console.log('component will update called');
  },
  componentWillMount: function() {
    console.log('component mounted');
  },
  componentDidMount: function() {
    console.log('componentDidMountmounted');
  },
  componentWillUnmount: function() {
    clearInterval(this.timer);
    this.timer = null;
  },
  startTimer: function() {
    var _this = this;
    var seconds = this.state.count;
    this.timer = setInterval(function(){
      if(seconds > 0) {
        seconds--
      } else {
        _this.setState({countdownStatus:'stopped'});
        clearInterval(_this.timer);
      }
      _this.setState({
        count: seconds
      });
    },1000)
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count: seconds,
      countdownStatus: 'started'
    })
  },
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus})
  },
  render: function() {
    var {count, countdownStatus} = this.state;
    var _this = this;
    var renderControlArea = function() {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChange={_this.handleStatusChange}></Controls>
      } else {
        return <CountdownForm onSetCountdown={_this.handleSetCountdown}/>
      }
    }
    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Countdown;
