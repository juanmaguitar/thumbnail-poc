import React, { Component } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import axios from 'axios'

import './App.css'
import Demo1 from './pages/Demo1'
import Demo2 from './pages/Demo2'
import Demo3 from './pages/Demo3'

const getApiUrlBreed = breed => `https://dog.ceo/api/breed/${breed}/images`
const apiUrlListBreeds = 'https://dog.ceo/api/breeds/list/all '

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      breeds: [],
      images: []
    }
  }
  componentDidMount () {
    axios
      .get(apiUrlListBreeds)
      .then(({ data: { message: breeds } }) => Object.keys(breeds))
      .then(breeds => {
        this.setState({ breeds })
        this.getBreedImages()
      })
  }

  getBreedImages (breed = 'affenpinscher') {
    const urlApi = getApiUrlBreed(breed)
    axios
      .get(urlApi)
      .then(({ data: { message: images } }) => images)
      .then(images => {
        this.setState({ images })
      })
  }

  handleBreedSelection = e => {
    const breedSelected = e.target.value
    this.getBreedImages(breedSelected)
  }
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <header>
              <div className="breedSelectionBox">
                <p>Select a Breed:</p>
                <select onChange={this.handleBreedSelection}>
                  {this.state.breeds.length &&
                    this.state.breeds.map((breed, index) => (
                      <option key={index}>{breed}</option>
                    ))}
                </select>
              </div>
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
