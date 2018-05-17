import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import Demo1 from './pages/Demo1'
import Demo2 from './pages/Demo2'
import Demo3 from './pages/Demo3'

const urlApi = 'https://dog.ceo/api/breed/affenpinscher/images'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      images: []
    }
  }
  componentDidMount () {
    axios
      .get(urlApi)
      .then(({ data: { message: images } }) => images)
      .then(images => {
        this.setState({ images })
      })
  }
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header>
              <ul className="nav-list">
                <li className="nav-list__item">
                  <NavLink exact className="nav-link" to="/demo1">
                    Demo1
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className="nav-link" to="/demo2">
                    Demo2
                  </NavLink>
                </li>
                <li>
                  <NavLink exact className="nav-link" to="/demo3">
                    Demo3
                  </NavLink>
                </li>
              </ul>
            </header>
            <main>
              <Switch>
                <Route
                  path="/demo1"
                  render={() => <Demo1 images={this.state.images} />}
                />
                <Route
                  path="/demo2"
                  render={() => <Demo2 images={this.state.images} />}
                />
                <Route
                  path="/demo3"
                  render={() => <Demo3 images={this.state.images} />}
                />
              </Switch>
            </main>
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
