import React  from 'react';
import './App.css';
import ToolTip from './ToolTip';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      position:"top",
      hovering:false,
    };
  }
  // handleclick which handle the position
  handleClick=(pos)=>{
    this.setState({
      position:pos,
      // console.log("pos",pos)
    })
  };
// handle mouse enter
  handleMouseEnter=()=>{
    this.setState({
      hovering:true,
    });
  };
// handle mouse leave
  handleMouseLeave=()=>{
    this.setState({
      hovering:false
    })
  }
// render part of class component
  render(){
    return (
    <div className="App">
        <div className='button-position'>
          <div className='group-name'>
            select the position of the hovering!!
          </div>
          <button
          className= {this.state.position=== 'top' ? "btn active-btn" :"btn" }
          onClick={(e)=>{
            this.handleClick('top');
          }}>
            top
          </button>
          <button
          className={this.state.position=== 'left' ? "btn active-btn" :"btn"}
          onClick={(e)=>{
            this.handleClick('left');
          }}>
            left
          </button>
          <button
          className={this.state.position=== 'right' ? "btn active-btn" :"btn"}
          onClick={(e)=>{
            this.handleClick('right');
          }}>
            right
          </button>
          <button
          className={this.state.position=== 'down' ? "btn active-btn" :"btn"}
          onClick={(e)=>{
            this.handleClick('down');
          }}>
            down
          </button>
        </div>
      <div id="button-container">
          <button
          className='btn hover-button'
          onMouseOver={this.handleMouseEnter}
          onMouseOut={this.handleMouseLeave}
      >
        Hover Over Me!!
          </button>
          {this.state.hovering && <ToolTip position={this.state.position}/>}
        </div>
      </div>
    );
  }
}

   
       
export default App;
