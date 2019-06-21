import React from 'react';

class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time: new Date()
    };
    this.tick = this.tick.bind(this);
  }

  render() {
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
    return <div>

      <h1 class = "header">Clock</h1>
    <div class="all">

      <div class="time">
      <span class="h3time">Time:</span>
      <span class="time-items">{this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()}  PDT</span>
      </div>
      
      <div class="date">
      <span class="h3date">Date:</span>
      <span class="date-items">{weekdays[this.state.time.getDay()]} {months[this.state.time.getMonth()]} {this.state.time.getDate()} {this.state.time.getFullYear()}</span>
      </div>

      </div>
    

      
    </div>;
  }

  componentDidMount() {
    const id = setInterval(this.tick, 1000);
  }

  tick() {
    this.setState({ time: new Date() });
  }


  componentWillUnmount() {
    clearInterval(id);
    id = 0;
  }
}

export default Clock;