import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class LifeCycleMethodsInReact extends Component {
    

    //Initial Stage
    state = {name: "default Value"}

    //Mount Stage
    componentDidMount(){
        console.log("componentDidMount has been executed!")
    }

    //Update Stage
    componentDidUpdate(){
        console.log("componentDidUpdate has been executed!")
    }

    //unmount Stage
    componentWillUnmount(){
        console.log("componentWillUnmount has been executed!")
    }


    updateState = () =>{
        this.setState({name: "This is a designed message"})
    }

    unmountComponent = ()  => {
        ReactDOM.unmountComponentAtNode(document.getElementById("lecture"))

        setTimeout(this.insertComponent,2000)
    }
    
    insertComponent = () => {
        ReactDOM.render(<LifeCycleMethodsInReact/>, document.getElementById("lecture"));
    }

    render() {
        return (
            <div className='container'>
        
                <h3>LifeCycle Methods (Class Component)</h3>
                <h5>Name: {this.state.name}</h5>
                <button type='button' className='btn btn-warning mx-2' onClick={this.updateState}>Update State
                </button>
                <button type='button' className='btn btn-danger' onClick={this.unmountComponent}>Unmount component
                </button>
                
            </div>
        );
    }
}

export default LifeCycleMethodsInReact;