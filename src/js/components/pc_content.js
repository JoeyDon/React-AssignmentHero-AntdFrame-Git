import React from 'react';
import { Row, Col } from 'antd';
import { Menu, Icon } from 'antd';
import 'antd/dist/antd.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class PCFooter extends React.Component{

    constructor(){
        super();

    }

    render(){
        return(
            <div>
                <Row gutter={16}>
                    <Col span={6}>
                        <div className="content-box">
                            <Row gutter={16} type="flex" align="middle">
                                <Col span={20}>
                                    <div className="content-box-header">Finance</div>
                                </Col>
                                <Col span={4}>
                                    <div className="content-box-header-more">+</div>
                                </Col>
                            </Row>
                            <div className="content-box-picture">
                                <div className="picture"></div>
                            </div>
                            <div className="content-box-footer">15 items</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="content-box">
                            <Row gutter={16} type="flex" align="middle">
                                <Col span={20}>
                                    <div className="content-box-header">Economics</div>
                                </Col>
                                <Col span={4}>
                                    <div className="content-box-header-more">+</div>
                                </Col>
                            </Row>
                            <div className="content-box-picture">
                                <div className="picture"></div>
                            </div>
                            <div className="content-box-footer">15 items</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="content-box">
                            <Row gutter={16} type="flex" align="middle">
                                <Col span={20}>
                                    <div className="content-box-header">Accounting</div>
                                </Col>
                                <Col span={4}>
                                    <div className="content-box-header-more">+</div>
                                </Col>
                            </Row>
                            <div className="content-box-picture">
                                <div className="picture"></div>
                            </div>
                            <div className="content-box-footer">15 items</div>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="content-box">
                            Upload your work to help the community.
                            <div className="content-box-upload-footer">Upload</div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}