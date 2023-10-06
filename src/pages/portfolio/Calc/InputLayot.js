import React from 'react'

class InputLayot extends React.Component {

render(){
    return(
        <div className="calc__input">
            <p>{this.props.curInput}</p>
        </div>

    )

}
}

export default InputLayot