
import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { IMAGES } from '../../lib/appConstants'

export const FaqsSection = () => {
  return (
    <HomePageSection
      title='Preguntas Frecuentes'
      slug='faq'
      headerImage={IMAGES.DOG}
    >
      <FaqsSectionsStyles>
        <div className='faq__questions'></div>
      </FaqsSectionsStyles>
    </HomePageSection>
  )
}

const FaqsSectionsStyles = styled.div`
  .faq {
    &__questions {

    }
  }
`
