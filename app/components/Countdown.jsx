var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
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
        }
      }
  },
  startTimer: function() {
    var _this = this;
    var seconds = this.state.count;
    var interval = setInterval(function(){
      if(seconds > 0) {
        seconds--
      } else {
        clearInterval(interval);
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
  render: function() {
    var {count} = this.state;
    return (
      <div>
        <Clock totalSeconds={count}/>
        <CountdownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    )
  }
});

module.exports = Countdown;
