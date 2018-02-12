import React from 'react';
import { Row, Col} from 'antd';

import { Layout, Select, Radio } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
const RadioGroup = Radio.Group;

// this part starts with left side tiny information of title and author
export default class PCDocumentsBody extends React.Component{
    constructor(){
        super();

        this.state = {
            IncludeQuestion: 1,
            Title: 'Art of Coding',
            Author: 'John Smith',
            Content: 'Contrary to popular belief, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae leo vel dui congue ornare. In fermentum eros vel porta consequat. Mauris tincidunt arcu eget mattis condimentum. Sed porta elit nec nulla varius, at sollicitudin est pellentesque. Aenean luctus molestie elit vel ornare. Vivamus gravida dui sed imperdiet viverra. Mauris luctus et justo id tincidunt. Etiam convallis lobortis dui, vitae pulvinar felis. Curabitur lacinia risus lacus, vel egestas diam tristique eget. Duis eu eros bibendum, fermentum nisi sit amet, cursus lacus. Vestibulum sed ex non leo fermentum tincidunt sit amet molestie sem. Quisque convallis quam eget tellus pulvinar iaculis. In sit amet cursus sem. Nullam semper viverra dapibus. Phasellus libero massa, vulputate a massa id, venenatis vulputate orci. Pellentesque rhoncus ornare erat, et pulvinar ante eleifend vel. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vitae leo vel dui congue ornare. In fermentum eros vel porta consequat. Mauris tincidunt arcu eget mattis condimentum. Sed porta elit nec nulla varius, at sollicitudin est pellentesque. Aenean luctus molestie elit vel ornare. Vivamus gravida dui sed imperdiet viverra. Mauris luctus et justo id tincidunt. Etiam convallis lobortis dui, vitae pulvinar felis. Curabitur lacinia risus lacus, vel egestas diam tristique eget. Duis eu eros bibendum, fermentum nisi sit amet, cursus lacus. Vestibulum sed ex non leo fermentum tincidunt sit amet molestie sem. Quisque convallis quam eget tellus pulvinar iaculis. In sit amet cursus sem. Nullam semper viverra dapibus. Phasellus libero massa, vulputate a massa id, venenatis vulputate orci. Pellentesque rhoncus ornare erat, et pulvinar ante eleifend vel. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
            Date: '4 March 2017'
        };

        this.onChange = (e) => {
            console.log('radio checked', e.target.value);
            this.setState({
                IncludeQuestion: e.target.value,
            });
        };
    }

    render(){
        return(
            <div>
                <Row className="documentTop3">
                    <Col span={4}>
                        <div className="smallInfo">
                            <span className="smallTitle">{this.state.Title}</span><br/>
                            <span className="smallAuthor">by&nbsp;{this.state.Author}</span>
                        </div>
                    </Col>
                    <Col span={5}>
                        <div className="borderLeft"></div>
                    </Col>
                    <Col span={3}>
                        <div className="borderLeft"></div>
                    </Col>
                    <Col span={6}>
                        <div className="borderLeft">
                            <img className="buttonZoomOut" src="./src/img/zoomout.png" alt="zoomout"/>
                            <img className="buttonZoomIn" src="./src/img/zoomin.png" alt="zoomin"/>
                        </div>
                    </Col>
                    <Col span={6}>
                        <div className="borderLeft"></div>
                    </Col>
                </Row>

                <Row className="documentBody">
                    <Col span={18}>
                        <div className="documentBodyLeft">
                            <p className="smallDate"> Last updated <br/>{this.state.Date}</p>
                            <div className="contentDocument">
                                <p className="titleContent">{this.state.Title}</p>
                                <p className="authorContent">{this.state.Author}</p>
                                <p className="contentContent">{this.state.Content}</p>
                            </div>
                        </div>
                    </Col>

                    <Col span={6}>
                        <div className="documentBodyRight">
                            <Row>
                                <Col span={12} className="documentBodyActiveButton" >Solution</Col>
                                <Col span={12} className="documentBodyButton" >Question</Col>
                            </Row>
                            <div className="documentBodyDownload" >
                                <p className="download-now">Download Now</p>
                                <div className="documentBodyDownloadOptions">
                                    <Row>
                                        <Row className="heading">Choose format</Row>
                                        <Row gutter={16} className="formats">
                                            <Col span={6}><div className="pdf">PDF</div></Col>
                                            <Col span={6}><div className="word">WORD</div></Col>
                                        </Row>
                                    </Row>
                                    <Row>
                                        <Row className="heading">Send it to your email</Row>
                                        <Row>
                                            <form action="javascript:void(0);">
                                                <input className="email-box" type="email" name="email" />
                                                <input type="submit" className="email-submit" value="Send" />
                                            </form>
                                        </Row>
                                    </Row>
                                    <Row>                                        
                                        <Row className="heading">Include the question</Row>
                                        <Row className="include-question-radio">
                                            <RadioGroup onChange={this.onChange} value={this.state.IncludeQuestion}>
                                                <Radio value={1}>Yes</Radio>
                                                <Radio value={0}>No</Radio>
                                            </RadioGroup>
                                        </Row>
                                    </Row>
                                    <Row>
                                        <Row className="heading">Payment option</Row>
                                        <Row>
                                            <Select defaultValue="Paypal" className="payment-options" size={'large'}>
                                                <Option value="paypal">Paypal</Option>
                                                <Option value="skrill">Skrill</Option>
                                                <Option value="card">Card</Option>
                                                <Option value="bank">Bank</Option>
                                            </Select>
                                        </Row>
                                    </Row>
                                    <div className="buy-now">Buy now</div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>


            </div>

        );
    }
}