import React, { Component }from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { List } from 'antd';
import './style.css';

class appList extends Component{

constructor(props){
    super(props)
    this.state={
        data:[]
    }
}

UNSAFE_componentWillReceiveProps(nextProps){
  
  console.log(nextProps)
let id=nextProps.match.params.id
let url='http://www.dell-lee.com/react/api/list.json'
if(id){
    url=url+'?id='+id
}
axios.get(url)
.then(res=>{
    console.log(res.data.data)

this.setState({
data:res.data.data
})
})
}

componentDidMount(){
    let id=this.props.match.params.id
    let url='http://www.dell-lee.com/react/api/list.json'
    if(id){
        url=url+'?id='+id
    }
    axios.get(url)
    .then(res=>{
        console.log(res.data.data)
const data=res.data.data
this.setState({data})
    })
}

render(){

    // console.log(this.props.match.params.id)//undefined
    return (
        <List
     
      bordered
      dataSource={this.state.data}
      renderItem={item => (
    
          <List.Item>
          <Link to={`/detail/${item.id}`}>
          {item.title}
          </Link>
          </List.Item>
       
      )}
    />
    )
}
}
export default appList;