var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');
var Timer = React.createClass({
  getInitialState: function() {
    return {count:0,countdownStatus: 'paused',page: 'timer'};
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
  handleStatusChange: function(newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  startTimer: function() {
    var _this = this;
    var seconds = this.state.count;
    this.timer = setInterval(function(){
      _this.setState({
        count: ++seconds
      });
    },1000)
  },
  render: function() {
    var {count, countdownStatus, page} = this.state;
    var _this = this;
    var renderControlArea = function() {
        return <Controls countdownStatus={countdownStatus} page={page} onStatusChange={_this.handleStatusChange}></Controls>
    }
    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    )
  }
});

module.exports = Timer;
