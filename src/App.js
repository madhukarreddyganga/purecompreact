import React, { PureComponent } from 'react';

import './App.css';

const Time=(props)=>{
  console.log('const called.....')
return <div>{props.value}</div>
}
class App extends PureComponent {
  constructor(props) {
    super(props);
   this.state={
     value:Math.random()
   }
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState(()=>{
        return {value:2}
      });
    },10000)
  }
  

  render() {
    console.log('render called.....')
    return (
      <div className="App">
        <Time value={this.state.value}></Time>
      </div>
    );
  }
}

export default App;
/*shouldComponentUpdate(nextProp,nextState){
     
    console.log('nextState',nextState);
    console.log('currentState',this.state);
    return ( this.state.value===nextState.value?true:false)

    
  }*/