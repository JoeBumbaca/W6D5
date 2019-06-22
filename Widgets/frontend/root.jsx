import Clock from './clock';
import React from 'react';
import Tabs from './tabs';

tabs = {title: '' ,content: '', argument: 0};
class Root extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return  <div>
      <Tabs tabs={tabs}/>;
      <Clock />;
    </div>
    
  }
}

export default Root;