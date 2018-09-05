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
          <HomePageHeaderAside>
            <h1>Cihuahack</h1>
            <h2>Gira Universitaria y lanzamiento</h2>
            <h4>
              Cihuahack se fue de gira, retando a jóvenes universitarios a unirse a la hackaton por un cihuatán virtual.
            </h4>
          </HomePageHeaderAside>
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
        z-index: 9999 !important;
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
const HomePageHeaderAside = styled.div`
  background-color: rgba(0,0,0,0.5);
  box-shadow: 2px 2px 3px rgba(0,0,0,0.3);
  color: ${({ theme}) => theme.white};
  position: absolute;
  margin-top: 65px;
  height: 235px;
  width: 200px;
  z-index: 999;
  h1 {
      margin: 10px 0 0px 0;
      font-size: 2em;
    }
  h2 {
    font-size: 1.1em;
  }
  h4 {
    margin: 0 auto;
    width: 80%;
    font-weight: 400;
    font-size: 0.95em;
  }
  @media (min-width: ${({ theme }) => theme.medium.start}) {
    width: 300px;
    margin-top: 65px;
    height: 385px;

    h1 {
      margin: 40px 0 0px 0;
      font-size: 3em;
    }
    h2 {
      font-size: 1.5em;
    }
    h4 {
      width: 75%;
      font-size: 1.35em;
    }
  }
  @media (min-width: ${({ theme }) => theme.large.start}) {
    width: 400px;
    margin-top: 90px;
    height: 555px;
    h1 {
      margin: 85px 0 0px 0;
      font-size: 4.5em;
    }
    h2 {
      font-size: 2em;
    }
    h4 {
      width: 50%;
      font-size: 1.5em;
    }
  }
`