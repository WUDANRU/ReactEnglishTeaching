import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import 'antd/dist/antd.css';
import './style.css';
import Head from './components/Header';
import appList from './container/List';
import Detail from './container/Detail';
import Login from './components/Login';
import Vip from './container/Vip';

import { Layout } from 'antd';


const { Header, Content, Footer } = Layout;

class App extends Component{
render(){
    return (
    <BrowserRouter>
    <Layout style={{minWidth:1300,height:'100%'}} className="layout">
    <Header className="header">
    <Head />
    
    </Header>
    <Content className="content"> 
    <Login />
    {/* /detail/:id */}
    <Switch>
    <Route path='/vip' component={Vip} />
    <Route path='/detail/:id' component={Detail} />
    <Route path='/:id?' component={appList} />
    
    </Switch>
    
     
    </Content>
    <Footer className="footer">Ant Design ©2020 Created by Ant UED</Footer>
  </Layout>
  </BrowserRouter>
  )
}
}
ReactDOM.render(<App />, document.getElementById('root'));


