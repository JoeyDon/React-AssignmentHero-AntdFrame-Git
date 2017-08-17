import React from 'react';
import { Row, Col} from 'antd';

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

// this part is the top blue area with logo.
export default class PCDocumentsHead extends React.Component {
    render() {
        return (
            <div>
                <Row className="documentTop1">
                    <Col span={12}>
                        <img src="./src/img/logo.png" alt="logo" className="documentLogo"/>
                    </Col>
                    <Col span={7}></Col>
                    <Col span={3}>
                        <div className="borderLeft"></div>
                    </Col>
                    <Col span={2}>
                        <div className="borderLeft"></div>
                    </Col>
                </Row>

                <div className="documentTop2">
                </div>
            </div>
        );
    }
}
