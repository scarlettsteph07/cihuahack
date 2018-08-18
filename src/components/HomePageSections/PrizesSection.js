
import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components'

import { HomePageSection } from './'
import { EXTERNAL_LINKS } from '../../lib/appConstants'

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
        <ul className='prizes__list'>
          <li className='prizes__list__item'>
            Asesoramiento / consultoría por un año. A través de reuniones mensuales en el
            &nbsp;<a
              className='prizes__link'
              href={EXTERNAL_LINKS.AMERICAN_SPACES}
              target='_blank'
              rel='noopener noreferrer'
            >
              American Spaces
            </a>&nbsp;
            TechLab, expertos locales y estadounidenses ofrecerán orientación experta y consejo a los ganadores de cada categoría de Cihuahack para que traigan sus ideas de prototipo a la aplicación de trabajo.
          </li>
          <li className='prizes__list__item'>
            Oportunidades de networking con incubadoras / aceleradoras de negocios.
          </li>
          <li className='prizes__list__item'>
            Oportunidad de solicitar una pasantía en los EE.UU.
            &nbsp;<a
              className='prizes__link'
              href={EXTERNAL_LINKS.KORINVER}
              target='_blank'
              rel='noopener noreferrer'
            >
              Korinver
            </a>&nbsp;
            tiene un proyecto de pasantías Int2 con compañías de TI en Seattle para enviar jóvenes profesionales de TI de El Salvador a EE.UU. con el fin de acelerar sus habilidades de desarrollo de software. Los ganadores de Cihuahack tendrán un proceso acelerado para aplicar a esta oportunidad.
          </li>
        </ul>

        <div className='prizes__text'>
          Otros premios incluyen:
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
    &__list {
      -webkit-padding-start: 16px;
      &__item {
        margin-bottom: 25px;
      }
    }

    &__link {
      border-bottom: 1px solid ${({theme}) => theme.textPrimary};
      &:hover {
        color: ${({theme}) => theme.white};
        background-color: ${({theme}) => theme.textPrimary};
      }
    }

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
