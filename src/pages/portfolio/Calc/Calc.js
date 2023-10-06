
import React from 'react'

import Buttons from './Buttons'
import InputLayot from './InputLayot'
import './Calc.css';
import Header from '../../../layouts/Header'


class Calc extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            input: "",
            buttons: [
            ['AC', 'DEL', '/', '*'],
            [7, 8, 9, '-'],
            [4, 5, 6, '+'],
            [1, 2, 3, '='],
            [0, '.']
            ],
            leftOperand: null,
            //rightOperand: null,
            operation: '',
            isClearFlag: false,
        }
        
        this.e = this.e.bind(this)
        this.solve = this.solve.bind(this)
    }

   

    render(){
        this.e('0')
       
        
        return(      
            <div className="App">
                <Header />            
            <div className='calc'>                
                <InputLayot curInput={this.state.input}/>
                <Buttons buttons={this.state.buttons} q={this.e}/>
            </div>
           </div>
        )
    
    }

   
    solve(char)
    {
        let curInput
        switch(char)
        {          
            
            case '+': curInput = Number(this.state.leftOperand) + Number(this.state.input)
                
                break;
            case '-':
                curInput = Number(this.state.leftOperand) - Number(this.state.input)
               
                break;
            case '*':
                curInput = Number(this.state.leftOperand) * Number(this.state.input)
                
                break;
            case '/':
                curInput = Number(this.state.leftOperand) / Number(this.state.input)
               
                break;
                
            
        
        }

        this.setState({input: curInput})
        this.setState({leftOperand: null})
        this.setState({isClearFlag: false})
    }


    e(buttonName){
        
        if(Number.isInteger(buttonName))
        {
            if(this.state.isClearFlag==true&&this.state.leftOperand!=null)
            {
                this.setState({input: buttonName})
                this.setState({isClearFlag: false})
            }
            else
            {
                let curInput = String(this.state.input)
                this.setState({input: curInput+=buttonName})
            }
                
        }
        else
        {
            if(buttonName==='-'|| buttonName==='+'|| buttonName==='*'|| buttonName==='/')
                {
                    if(this.state.isClearFlag===true)
                    {
                        this.setState({operation: buttonName})
                        let curInput = this.state.input
                        let newInput=curInput.slice(0, -1)
                        newInput+=buttonName
                        this.setState({input: newInput})
                        console.log(this.state.input)

                        
                    }
                    else 
                        if (this.state.leftOperand!=null)
                        {
                            this.solve(this.state.operation)
 
                        }
                            else {
                                this.setState({leftOperand: this.state.input})
                                this.setState({operation: buttonName})
                                this.setState({isClearFlag: true})
                                this.setState({input: this.state.input+=buttonName})
                    }
                   
                }
                
            else
                if(buttonName==='=')
                    {
                        this.solve(this.state.operation)
                    }
                else
                    if(buttonName==='AC')
                    {
                        let curInput = String(this.state.input).slice(0, -1)
                        this.setState({input: curInput})
                    } 
                    else if(buttonName==='DEL')
                    {
                        this.setState({input: ""})
                        this.setState({leftOperand: null})
                        this.setState({operation: ''})
                        this.setState({isClearFlag: false})
                    }
                    

        }

        //console.log(buttonName)
        
    }


}
    
export default Calc;