import React from 'react';
import './App.css';
class App extends React.Component{
  constructor(props){
    super(props);
     this.state = {
            date:new Date(),
        };
        console.log(typeof this.state.date)
  }  

  componentDidMount(){
  this.timer=setInterval(() => {
    this.setState({
      date:new Date()
    })
  }, 1000)}
  componentWillUnmount(){
    if(this.timer){
      clearInterval(this.timer)
    }
  }
  render(){
    return(
    <div className="container">
      <div className="content">
        <p className="item"> Time : {this.state.date.toLocaleTimeString()}</p>
     <p  className="item">Date: {this.state.date.toLocaleDateString()}</p>
      </div>
      </div>
    )
  }
}
export default App;

