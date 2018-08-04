import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import { DesktopMenu, HomePage, Footer } from './components'
import theme from './components/theme'
import './App.css'

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <DesktopMenu />
          <HomePage />
          <Footer />
        </div>
      </ThemeProvider>
    )
  }
}

export default App