import React, {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Lifecycles from 'Lifecycles'
import Home from 'Home'
import Logger from 'Logger'


export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
            <ul>
              <li>
                <Link
                  to='/lifecycles'
                >
                  Lifecycles
                </Link>
              </li>
              <li>
                <Link
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/logger'
                >
                  Logger
                </Link>
              </li>
            </ul>
          </header>
          <Route
            exact
            path='/'
            component={Home}
          />
          <Route
            exact
            path='/lifecycles'
            component={Lifecycles}
          />
          <Route
            exact
            path='/logger'
            component={Logger}
          />
        </div>
      </BrowserRouter>
    )
  }
}
