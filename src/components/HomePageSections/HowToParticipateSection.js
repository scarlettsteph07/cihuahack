import React from 'react'
import styled from 'styled-components'

import { HomePageSection } from './'
import { IMAGES } from '../../lib/appConstants'

export const HowToParticipateSection = () => {
  return (
    <HomePageSection
      title='¿Cómo Participar?'
      slug='como-participar'
      headerImage={IMAGES.JAGUAR}
    >
      <HowToParticipateStyles>
        <div className='how-to-participate__text__bold'>Los requisitos para participar son:</div>
        <ul className='how-to-participate__list'>
          <li className='how-to-participate__list__item'>Ser salvadoreño y residir en El Salvador</li>
          <li className='how-to-participate__list__item'>Adultos mayores de 18 años</li>
          <li className='how-to-participate__list__item'>Equipos de cuatro personas</li>
          <li className='how-to-participate__list__item'>Uno de los miembros del equipo debe ser una mujer</li>
          <li className='how-to-participate__list__item'>Tener las capacidades técnicas para crear aplicaciones en AR/VR</li>
          <li className='how-to-participate__list__item'>Inscribirse personalmente y a su grupo oficialmente en en link que estará disponible en este sitio web</li>
        </ul>
      </HowToParticipateStyles>
    </HomePageSection>
  )
}

const HowToParticipateStyles = styled.div`
  .how-to-participate {
    &__text {
      &__bold {
        margin-bottom: 30px;
        font-weight: 600;
      }
    }

    &__list {
      width: 75%;
      &__item {
        margin-bottom: 15px;
      }
    }
  }
`
