import React from "react"
import styled from "styled-components"
import Loader from "./Loader"

const Container = styled.div`
  width: 160px;
  height: 160px;
  margin: 10px;
  border-radius: 15px;

  background-color: #413c69;
  color: #dcd6f7;

  font-size: 3.125rem;
  font-weight: 700;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  .label {
    font-size: 1.875rem;
    color: #a6b1e1;
  }
`

const Card = ({ content, label, loaded }) => {
  return (
    <Container>
      {loaded ? content : <Loader />}
      <span className="label">{label}</span>
    </Container>
  )
}

export default Card
