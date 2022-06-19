import React from "react"
import styled from "styled-components"

const RippleSpinner = styled.div`
  display: inline-block;
  position: relative;
  width: 61px;
  height: 61px;

  div {
    position: absolute;

    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    &:nth-child(2) {
      animation-delay: -0.5s;
    }
  }
  @keyframes lds-ripple {
    0% {
      top: 30.5px;
      left: 30.5px;

      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 30.5px;
      left: 30.5px;

      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 30.5px;
      left: 30.5px;

      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;

      width: 61px;
      height: 61px;
      opacity: 0;
    }
  }
`

const Loader = () => {
  return (
    <RippleSpinner>
      <div></div>
      <div></div>
    </RippleSpinner>
  )
}

export default Loader
