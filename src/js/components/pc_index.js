import React from 'react';
import PCHeader from './pc_header';
import PCSidebar from './pc_sidebar';
import PCContent from './pc_content';
import PCFooter from './pc_footer';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class PCIndex extends React.Component{
    render(){
        return(
            <Layout>
                <header className="header"><PCHeader/></header>
                <Layout>
                    <Sider width={360} className="sidebar"><PCSidebar/></Sider>
                    <Content className="content"><PCContent/></Content>

                </Layout>
                <footer className="footer"><PCFooter/></footer>
            </Layout>
        );
    }
}
