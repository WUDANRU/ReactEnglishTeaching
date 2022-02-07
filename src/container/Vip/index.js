import React,{ Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';
import axios from 'axios';


class Vip extends Component{

constructor(props){
    super(props)
    this.state={
        login:true,
        vipFinish:false
    }
}

render(){ 
    console.log('render')
    if(this.state.login){
    if(this.state.vipFinish){
        return <div className="vip" >VIP</div>
    }else{
        return <div className="vip" >正在判断用户登陆状态...</div>
    }
     
    }
    else{
        return <Redirect to='/' />
    }
   
}

componentDidMount(){
    console.log('componentDidMount')
    axios.get('http://www.dell-lee.com/react/api/isLogin.json',{
        withCredentials:true
    })
    .then(res=>{
        console.log(res.data.data.login)
        const login=res.data.data.login
        this.setState
        ({
            login,
            vipFinish:true
        })
    })
}

   
}


export default Vip;