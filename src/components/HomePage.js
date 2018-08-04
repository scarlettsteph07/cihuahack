import React, { Component } from 'react'
import styled from 'styled-components'

import { HomePageHeader } from './'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader></HomePageHeader>
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`

`