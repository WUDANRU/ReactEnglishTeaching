import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import { Card } from 'antd';

class Detail extends Component{

constructor(props){
    super(props)
    this.state={
   
        content:'',
        title:' '
   

    }}

componentDidMount(){
    const id=this.props.match.params.id;
    axios.get('http://www.dell-lee.com/react/api/detail.json?id='+id) 
    .then(res=>{
        console.log(res.data.data)
        this.setState(res.data.data)
}
)}

render(){
    console.log(this.props)
    return(
       <Card title={this.state.title}>
       <div className='content' dangerouslySetInnerHTML={{__html:this.state.content}}></div>
    </Card>
    )
}}

export default Detail;