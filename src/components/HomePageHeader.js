import React, { Component } from 'react'

import Slider from 'react-slick'
import StyledSlatOuter from './StyledSlatOuter'
import StyledSlatInner from './StyledSlatInner'
import images from '../lib/carousel'
import styled from 'styled-components'

export class HomePageHeader extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 200,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
    }
    return (
      <HomePageHeaderStyles className='home-page-header__outer' id='cihuahack'>
        <StyledSlatInner className='home-page-header__inner'>
          <Slider {...settings} className='home-page-header__carousel carousel'>
            {
              images.map((img, i) => 
                <div key={i}>
                  <BackgroundImage img={img.imageUrl} />
                </div>
              )
            }
          </Slider>
        </StyledSlatInner>
      </HomePageHeaderStyles>
    )
  }
}

const HomePageHeaderStyles = StyledSlatOuter.extend`
  height: 300px;
  box-shadow: ${({theme}) => theme.boxShadow};
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
  }

  .home-page-header {
    &__outer {
    }

    &__inner {
      max-width: 100% !important;
      height: 100%;
      padding: 0px;
      margin: 0px;
      @media (min-width: ${({ theme }) => theme.large.start}) {
        margin: auto;
      }
    }

    &__carousel {
      width: 100% !important;
      height: 100%;
      .slick-dots {
        bottom: 25px;
      }
      .slick-dots li {
        margin: 0 10px;
        button {
        &::before {
          color: white;
          font-size: 14px;
          }
        }
      }
    }
  }
`

const BackgroundImage = styled.div`
  width: 100%;
  height: 300px;
  background-image: ${props => props.img ? `url(/images/${props.img})` : ''};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    margin-top: 0;
    height: 450px;
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    height: 645px;
  }
`
