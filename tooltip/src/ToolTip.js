import React from 'react';
class ToolTip extends React.Component{
    tooltip=()=>{
        
        return `${this.props.position}`;
    }
    render(){
        return (
            <div className={`${this.tooltip()}`}>
                Thanks for hovering "{this.props.position}" 
            </div>
        )
    }
}


export default ToolTip;