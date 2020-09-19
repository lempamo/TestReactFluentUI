import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import { Icon, Nav } from 'office-ui-fabric-react';
import Home from './components/Home';
import './App.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    onRenderLink(props) {
        return <Link className={props.className} style={{ color: 'inherit', boxSizing: 'border-box' }} to={props.href}>
            <span style={{ display: 'flex' }}>
                {!!props.iconProps && <Icon style={{ margin: '0 4px' }} {...props.iconProps} />}
                {props.children}
            </span>

        </Link>;
    }

    render() {
        return (
            <Router>
                <div>

                    <Nav
                        onLinkClick={(event, element) => {
                            event.preventDefault();
                            history.push(element.url);
                        }}
                        groups={[
                            {
                                links: [
                                    {
                                        name: 'Home',
                                        url: '/',
                                        key: 'home',
                                    },
                                    {
                                        name: 'Ajax',
                                        url: '/ajax',
                                        key: 'ajax',
                                    },
                                    {
                                        name: 'Bar',
                                        url: '/bar',
                                        key: 'bar',
                                    },
                                ]
                            }
                        ]}
                        linkAs={<Link className={props.className} style={{ color: 'inherit', boxSizing: 'border-box' }} to={props.href}>
                            <span style={{ display: 'flex' }}>
                                {!!props.iconProps && <Icon style={{ margin: '0 4px' }} {...props.iconProps} />}
                                {props.children}
                            </span>

                        </Link>}
                    />

                    <hr/>

                    <Switch>
              <Route exact path='/' component={Home} />
              <Route path="*" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}
