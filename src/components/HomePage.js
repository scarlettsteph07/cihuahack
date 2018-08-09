import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'

import { HomePageHeader } from './'
import { HomePageSection } from './HomePageSections/'
import SectionsData from '../lib/data'

export class HomePage extends Component {
  render() {
    return (
      <HomePageStyles className='home-page'>
        <HomePageHeader></HomePageHeader>
        {_.map(section => {
          return (
            <HomePageSection
              key={section.id}
              title={section.title}
              slug={section.slug}
            >
              {section.content}
            </HomePageSection>)
        })(SectionsData)
        }
      </HomePageStyles>
    )
  }
}

const HomePageStyles = styled.div`
  color: ${({theme}) => theme.red}
`