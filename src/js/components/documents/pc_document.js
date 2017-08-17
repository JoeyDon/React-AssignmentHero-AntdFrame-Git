import React from 'react';

import PCDocumentsHead from './pc_documentHead';
import PCDocumentsBody from './pc_documentBody';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class PCDocuments extends React.Component{
    render(){
        return(
            <div>
                <PCDocumentsHead/>
                <PCDocumentsBody/>
            </div>
        );
    }
}
/**
 * Created by mac on 2017/8/17.
 */
