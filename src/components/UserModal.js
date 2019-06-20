import React,{Component} from 'react'
import {Modal,Input} from 'antd'

class UserModal extends Component{
    constructor(props){
        super(props)
        this.state = {
            visible:false,
        }
    }

    showModalHandler = e =>{
        if(e)e.stopPropagation();
        this.setState({
            visible:true
        })
    }

    hideModalHandler = ()=>{
        this.setState({
            visible:false
        })
    }

    okHander = ()=>{
        const {onOk} = this.props
        onOk(this.state.inputVal)
        this.hideModalHandler()
    }

    inputValHandel(val){
        this.setState((prevState,props)=>({
            ...prevState,inputVal:val
        }))
    }

    render(){
        const {children,inputVal,title} = this.props
        return (
            <span>
                <span onClick={this.showModalHandler}>{children}</span>
                <Modal
                title={title}
                visible={this.state.visible}
                onOk={this.okHander}
                onCancel={this.hideModalHandler}
                >
                <Input defaultValue={inputVal} placeholder="Enter Your Message!" onChange={(e)=>{this.inputValHandel(e.target.value)}}/>
            </Modal>
            </span>
            
        )
    }
}

export default UserModal