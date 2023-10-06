import React from 'react'
import Button from './Button'

class Buttons extends React.Component {

    render(){
        
          

        return(
            <div className="calc__buttonsLayot">
                {
                this.props.buttons.map((el) => (
                    
                    el.map((e) => { return <Button buttonName={e} w={this.props.q}/> } )
                    
                ))
                }
            </div>
    
        )
    
    }
    }
    
    export default Buttons;