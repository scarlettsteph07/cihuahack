import React, { Component } from 'react'
import styled from 'styled-components'

import { HomePageHeader } from './'
import {
  AboutSection,
} from './HomePageSections/'
// import SectionsData from '../lib/data'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader/>
        <AboutSection />
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`
  color: ${({theme}) => theme.red}
`