var React = require('react');

var Controls = React.createClass({
  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(status) {
    var _this = this;
    return function() {
      _this.props.onStatusChange(status);
    }
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("Component will receive props" +nextProps.countdownStatus);
  },
  render: function() {
    var {countdownStatus} = this.props;
    var _this = this;
    var renderStartStopButton = function() {
      if(countdownStatus === 'started') {
        return <button className="button secondary" onClick={_this.onStatusChange('paused')}>Pause</button>
      } else if(countdownStatus === 'paused') {
        return <button className="button start primary" onClick={_this.onStatusChange('started')}>Start</button>
      }
    };
    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange('stopped')}>Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
