 import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';

const Main = (props) => {
    return(
        <section>
            <header>
                <nav>
                    <ul>
                        <li><NavLink 
                                to="/" 
                                exact
                                activeClassName="my-active-class"
                                activeStyle={{
                                    color:'orange'
                                }}>Home
                            </NavLink>
                        </li>
                        <li><NavLink 
                            to={{
                                pathname: '/about',
                                hash: '#submit',
                                search: '?quick-about=true'
                                }}
                            activeClassName="my-active-class">
                                About
                            </NavLink></li>
                        <li><NavLink to={{
                            pathname:'/contact',
                            hash:'#on-submit',
                            search:'?search=contact'
                        }}
                        activeClassName="my-active-class">
                        Contact
                        </NavLink>
                        </li>
                    </ul>
                </nav>
          </header>
            {/* <Route path="/" exact  render={() => <h1>Home</h1>}/>
            <Route path="/"  render={() => <h1>Home2</h1>}/> */}
            <Route path="/" exact component = {Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
        </section>

    );
}

export default Main;