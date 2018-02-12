import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import PCIndex from './components/pc_index';
import PCDocuments from './components/documents/pc_document';

const BasicExample = () => (
    <Router>
        <div>
            <Route exact path="/" component={Home}/>
            <Route path="/homepage" component={PCIndex}/>
            <Route path="/documentExample" component={PCDocuments}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
        <Link to="/homepage">PCIndex</Link><br/>
        <Link to="/documentExample">Document Example</Link>
    </div>
)

const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Topics = ({ match }) => (
    <div>
        <h2>Topics</h2>
        <ul>
            <li>
                <Link to={`${match.url}/rendering`}>
                    Rendering with React
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/components`}>
                    Components
                </Link>
            </li>
            <li>
                <Link to={`${match.url}/props-v-state`}>
                    Props v. State
                </Link>
            </li>
        </ul>

        <Route path={`${match.url}/:topicId`} component={Topic}/>
        <Route exact path={match.url} render={() => (
            <h3>Please select a topic.</h3>
        )}/>
    </div>
)

const Topic = ({ match }) => (
    <div>
        <h3>{match.params.topicId}</h3>
    </div>
)

export default BasicExample/**
 * Created by mac on 2017/8/29.
 */
