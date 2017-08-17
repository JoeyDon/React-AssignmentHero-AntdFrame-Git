import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import { Button } from 'antd';
import PCIndex from './components/pc_index';
import MobileIndex from './components/mobile_index';
import MediaQuery from 'react-responsive';
import PCDocuments from "./components/documents/pc_document";

export default class Root extends React.Component {
    render() {
        return (
            <div>
                <MediaQuery query='(min-device-width:1224px)'>
                    <PCDocuments/>
                </MediaQuery>
                <MediaQuery query='(max-device-width:1224px)'>
                    <MobileIndex/>
                </MediaQuery>
            </div>
        );
    };
}

ReactDOM.render(<Root/>, document.getElementById('app'));