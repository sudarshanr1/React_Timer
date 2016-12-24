var React = require('react');
var CountdownForm = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var seconds = this.refs.seconds.value;
    if(seconds !== undefined && seconds.length > 0 && seconds.match(/^[0-9]*$/)) {
      this.refs.seconds.value = '';
      this.props.onSetCountdown(parseInt(seconds, 10));
    }
  },
  render: function() {
    return (
      <div>
        <form ref="form" className="countdown-form" onSubmit={this.onSubmit}>
          <div className="">
            <input placeholder="Enter time in seconds" ref="seconds" type="text"></input>
          </div>
          <div className="">
            <button className="button expanded">Start</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = CountdownForm;
