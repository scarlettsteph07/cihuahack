
import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'

export const PrizesSection = () => {
  return (
    <HomePageSection title='Premios' slug='premios'>
      <PrizesSectionsStyles>
        <div className='prizes__text'>

        </div>
        <div className='prizes__carousel'>

        </div>
      </PrizesSectionsStyles>
    </HomePageSection>
  )
}

const PrizesSectionsStyles = styled.div`
  .prizes {
    &__text {

    }
    &__carousel{

    }
  }
`
