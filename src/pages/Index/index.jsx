import React from 'react'
import { Layout, Menu } from 'antd';

import {Link, Route, Switch} from "react-router-dom";

import ShouYe from '../ShouYe'

import './index.less'

const MenuItem  = Menu.Item;
const { Header, Content, Footer } = Layout;

export default class index extends React.Component {
    state = {}
    render() {
        return (
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu mode="horizontal" theme="dark" defaultSelectedKeys={['0']} className="menu">
                       <MenuItem>首页</MenuItem>
                       <MenuItem>解决方案</MenuItem>
                       <MenuItem>活动专题</MenuItem>
                       <MenuItem>企业入驻</MenuItem>
                       <MenuItem>企业文化</MenuItem>
                       <MenuItem>智慧培训平台</MenuItem>
                    </Menu>
                </Header>
                <Content>
                    <Switch>
                       <Route component={ShouYe}></Route>
                    </Switch>
                
                </Content>
                <Footer style={{ textAlign: 'center' }}>享帮帮 ©2021 </Footer>
            </Layout>

        )
    }
}