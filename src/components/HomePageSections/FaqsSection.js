
import React from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

import { HomePageSection } from './'
import { Question } from '../'
import { IMAGES } from '../../lib/appConstants'
import faqs from '../../lib/faqs'

export const FaqsSection = () => {
  return (
    <HomePageSection
      title='Preguntas Frecuentes'
      slug='faq'
      headerImage={IMAGES.DOG}
    >
      <FaqsSectionsStyles>
        {_.map(faq => (
          <Question
            key={faq.id}
            id={faq.id}
            question={faq.question}
            answer={faq.answer}
            answerType={faq.answer_type}
          />
        ))(faqs)}
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
