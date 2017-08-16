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
                This is sidebar!
            </div>
        );
    }
}