import React, { useState } from 'react'


class Button extends React.Component {

render(){
    console.log('im here')
    let n=this.props.buttonName

    return(
        
        <div className="calc__button" onClick={() => this.props.w(n)}>
            <p className="calc__button__name">{this.props.buttonName}</p>
        </div>

    )

}
}

export default Button;