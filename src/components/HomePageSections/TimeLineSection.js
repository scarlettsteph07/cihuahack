import React, { Component } from 'react'
import styled from 'styled-components'
import _ from 'lodash/fp'
import { HomePageSection } from './'
import data from '../../lib/timeline'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

export class TimeLineSection extends Component {
  render() {
    return (
      <HomePageSection title='¿Cómo inscribirse?' slug='suscribe'>
        <TimeLineSectionStyles className='timeline'>
          <div className='timeline__content'>
            {
              _.map((section) =>
                <div key={section.id} className='timeline__content__section'>
                  {
                    section.id !== 1
                    &&
                    <VerticalLine />
                  }
                  <Circle key={section.i}>
                    <p className='text'>
                      {section.id}
                    </p>
                  </Circle>
                  <Icon bgImage={section.icon} />
                  <p className='timeline__content__section__text'>
                    {section.text}
                  </p>
                </div>
              )(data)
            }
          </div>
          <a
            className='timeline__suscribe-button'
            href={EXTERNAL_LINKS.SUSCRIBE_FORM}
            target={EXTERNAL_LINKS.SUSCRIBE_FORM.startsWith('#') ? '_self' : '_blank'}
          >
            ¡Quiero participar!
          </a>
        </TimeLineSectionStyles>
      </HomePageSection>
    )
  }
}

const TimeLineSectionStyles = styled.div`
  display: flex;
  flex-flow: column;
  
  .timeline {
    &__content {
      clear: both;
      width: 100%;

      &__section {
        min-height: 85px;
        display: flex;
        flex-flow: column;

        &__text {
            font-size: 1.05em;
            display: inline-block;
            width: 63%;
            margin: -35px 0 15px 140px;
            clear: both;
            text-align: justify;
            padding-right: 100px;

          @media (max-width: ${({ theme }) => theme.small.end}) {
            width: 50%;
          }
        }
      }
    }
    &__suscribe-button {
      cursor: pointer;
      margin: 0 auto;
      background-color: ${({theme}) => theme.blue};
      padding: 30px 10px;
      border-radius: 5px;
      color: ${({theme}) => theme.white};
      font-weight: bold;
      font-size: 1.8em;
      text-align: center;
    }
  }
`

const Circle = styled.div`
  background-color: #FFF;
  width: 40px;
  height: 40px;
  border: 4px solid ${({ theme }) => theme.red};
  border-radius: 50%;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  z-index: 999;
  p {
    margin: 12px auto;
    line-height: 100%;
  }
`

const Icon = styled.div`
  position: absolute;
  width: 45px;
  height: 45px;
  margin: 0 0 0 75px;
  background-image: ${({ bgImage }) => bgImage ? `url(/svg/${bgImage})` : ''};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const VerticalLine = styled.div`
  background-color: ${({theme}) => theme.red};
  position: absolute;
  width: 5px;
  min-height: 85px;
  margin-left: 21px;
  margin-top: -85px;
`