import React from "react"
import styled from "styled-components"
import { Card } from ".."
import Wish from "../Wish"

const Container = styled.div`
  .heading {
    font-size: 2.8125rem;
    font-weight: 700;
    padding: 0 1.25rem;
    margin-top: 5rem;
    .highlight {
      color: #7f78d2;
      text-transform: capitalize;
    }
  }
  @media (max-width: 900px) {
    .heading {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 600px) {
    .heading {
      font-size: 2.25rem;
      font-weight: 600;
    }
  }
  @media (max-width: 300px) {
    .heading {
      margin-top: 10rem;
      font-size: 1.5rem;
      font-weight: 400;
    }
  }
`
const CardsContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 2.5rem 0;
`

const CountDown = ({ countDownData, name }) => {
  const { days, hours, minutes, seconds, loaded, isItBirthday } = countDownData
  if (isItBirthday) return <Wish name={name} />
  return (
    <Container>
      <div className="heading">
        Countdown to <span className="highlight">{name}'s</span> Birthday
      </div>
      <CardsContainer>
        <Card loaded={loaded} content={days} label="Days" />
        <Card loaded={loaded} content={hours} label="Hours" />
        <Card loaded={loaded} content={minutes} label="Minutes" />
        <Card loaded={loaded} content={seconds} label="Seconds" />
      </CardsContainer>
    </Container>
  )
}

export default CountDown
