// @flow
import React, { Component } from 'react'
import _ from 'lodash/fp'
import styled from 'styled-components'

// TODO: fix linter parsing error
type Props = {
  id: number,
  question: string,
  answer: string,
  answerType: string,
}

type State = {
  isActive: boolean,
}

const mapWithIndex = _.map.convert({ 'cap': false })

export class Question extends Component<Props, State> {
  state = {
    isActive: false
  }

  toggleQuestion = () => {
    this.setState({
      isActive: !this.state.isActive
    })
  }

  render() {
    const { id, question, answer, answerType } = this.props
    const { isActive } = this.state
    return (
      <QuestionStyles isActive={isActive} answerType={answerType}>
        <div className='question__title' onClick={this.toggleQuestion}>{`${id}. ${question}`}</div>
        <div className='question__answer'>
          {mapWithIndex((answerText, index) => (
            <div key={index} className='question__answer__text'>
              {answerText}
            </div>
          ))(answer)}
        </div>
      </QuestionStyles>
    )
  }
}

const QuestionStyles = styled.div`
  .question {
    &__title {
      padding: 20px;
      font-weight: 600;
      color: ${({theme, isActive}) => isActive ? theme.white : theme.textPrimary};
      background-color: ${({theme, isActive}) => isActive ? theme.blue : theme.bgBlue};
      cursor: pointer;
      &:hover {
        color: ${({theme})=> theme.white};
        background-color: ${({theme})=> theme.red};
      }
    }

    &__answer {
      padding: 20px;
      display: ${({isActive}) => isActive ? 'inline-block' : 'none'};

      &__text {
        margin-bottom: 20px;
        display: ${({answerType}) => _.isEqual(answerType, 'list') ? 'list-item' : 'inline-block'};
        list-style-type: disc;
        list-style-position: inside;
      }
    }
  }
`
