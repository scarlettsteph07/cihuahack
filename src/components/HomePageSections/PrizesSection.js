
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { HomePageSection } from './'

export const PrizesSection = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <HomePageSection title='Premios' slug='premios'>
      <PrizesSectionsStyles>
        <div className='prizes__text'>
          Los premios incluyen:
        </div>
        <div className='prizes__carousel'>
          <Slider {...settings} className='prizes__carousel'>
            <div className='prizes__carousel'>
              <div className='prizes__carousel__image prizes__carousel__image--oculus'></div>
              <h3 className='prizes__carousel__text'>oculus rift headsets</h3>
            </div>
            <div>
              <div className='prizes__carousel__image prizes__carousel__image--laptop'></div>
              <h3 className='prizes__carousel__text'>oculus ready laptops</h3>
            </div>
          </Slider>
        </div>
      </PrizesSectionsStyles>
    </HomePageSection>
  )
}

const PrizesSectionsStyles = styled.div`
  .prizes {
    &__text {
      margin-bottom: 30px;
      font-weight: 600;
    }
    &__carousel{
      &__text {
        color: ${({theme}) => theme.blue};
        text-transform: capitalize;
      }

      &__image {
        width: 200px;
        height: 150px;
        background-size: 200px;
        background-repeat: no-repeat;
        @media (min-width: ${({ theme }) => theme.medium.start}) {
        width: 300px;
        height: 200px;
        background-size: 300px;
        background-position: center;
        }
        &--oculus {
          background-image: url(/images/oculus.png);
        }
        &--laptop {
          background-image: url(/images/laptop.png);
        }
      }
    }
  }

  .slick-slide {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`
