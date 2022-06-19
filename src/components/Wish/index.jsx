import styled from "styled-components"

const Message = styled.div`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1.25rem;
  @media (max-width: 900px) {
    font-size: 2.5rem;
  }
  @media (max-width: 600px) {
    font-size: 2.25rem;
    font-weight: 600;
  }
  .highlight {
    color: #7f78d2;
  }
`

const Wish = ({ name }) => {
  return (
    <Message>
      HAPPY BIRTHDAY <span className="highlight">{name.toUpperCase()}</span> !!!
    </Message>
  )
}

export default Wish
