import React from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'
import { HomePageSection } from './'
import data from "../../lib/timeline";

export const TimeLine = () => {
  return (
    <HomePageSection title='Como inscribise?' slug='suscribe'>
      <AboutSectionStyles>
        <div className='timeline__content'>
          {
            _.map((section) =>
              <Circle key={section.i}>
                <p className='text'>
                  {section.id + 9}
                </p>
              </Circle>
            )(data)    
          }
        </div>
      </AboutSectionStyles>
    </HomePageSection>
  )
}

const AboutSectionStyles = styled.div`
  display: flex;
  flex-flow: column;

  .timeline {
    &__text {
      margin-bottom: 25px;
      &__bold {
        font-weight: 600;
      }
    }
  }
`

const Circle = styled.div`
  width: 50px;
  height: 50px;
  border: 2px solid red;
  border-radius: 50%;
  text-align: center;
`