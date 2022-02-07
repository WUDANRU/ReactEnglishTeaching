import React, { Component, Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Modal, Button, Input, message } from 'antd';
import axios from 'axios';
import './style.css';


class Login extends Component{

constructor(props){
    super(props)
    this.state={
        login:false,
        visible:false,
        user:'',
        password:'',
        
    }
    this.chenkHandleOk=this.chenkHandleOk.bind(this) 
    this.handleCancel=this.handleCancel.bind(this)
    this.handleClick=this.handleClick.bind(this)
    this.userChange=this.userChange.bind(this)
    this.passwordChange=this.passwordChange.bind(this)
    this.logout=this.logout.bind(this)
    
}

componentDidMount(){
    axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
        withCredentials:true})
    .then(res=>{
        console.log(res.data.data.login)
        const login=res.data.data.login;
        this.setState({
         login
        })
    })
}

logout(){
axios.get('http://www.dell-lee.com/react/api/logout.json',{
    withCredentials:true})
.then(res=>{
    console.log(res.data.data.logout)
    const logout=res.data.data.logout
    if(logout){
        this.setState({
            login:false
        })
    }
    // console.log(this.props)
    this.props.history.push('/')
})
}
handleClick(){
  this.setState({visible:true}) 
}
userChange(e){
    // console.log(e)
this.setState({
    user:e.target.value
})
}
passwordChange(e){
    // console.log(e.target.value)
    this.setState({
        password:e.target.value
    })
}

chenkHandleOk(){
    const { user, password }=this.state
  axios.get(`http://www.dell-lee.com/react/api/login.json?user=${user}&password=${password}`,{
    withCredentials:true})
  .then(res=>{
    //   console.log(res.data.data.login)
      const login=res.data.data.login
      if(login){
          message.success(`登录成功`)
          this.setState({
            login,
            visible:false
         })
      }
      else{
          message.error(`登录失败`)
      }
   

  })
}

handleCancel(){
    this.setState({visible:false})
}

render(){
    const login=this.state.login;
return(
<Fragment>
    {
        login?
<Button type="primary" onClick={this.logout}>退出</Button>:
<Button type="primary" onClick={this.handleClick} >登录</Button>
    }
<Link to="/vip"><Button type="primary" style={{marginLeft:6}}>Vip</Button></Link> 
<Modal
          title="登录"
          visible={this.state.visible}
          onOk={this.chenkHandleOk}
          onCancel={this.handleCancel}
        >
        <Input style={{ marginBottom:10 }} placeholder="请输入用户名" onChange={this.userChange} />
        <Input placeholder="请输入密码" type="password" onChange={this.passwordChange} />
        </Modal>
</Fragment>
        )
    }
}

export default withRouter(Login);