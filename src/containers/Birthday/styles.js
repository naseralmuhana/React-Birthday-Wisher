import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  .birthday {
    font-size: 1.5625rem;
    font-weight: 600;
    color: #7f78d2;
  }

  .credits {
    margin-top: 15px;
    .github-logo {
      opacity: 0.5;
      width: 50px;
      transform: scale(1);
      transition: opacity 0.35s ease-in-out, transform 0.2s ease-in-out;
      &:hover {
        opacity: 1;
        transform: scale(1.1);
      }
    }
  }

  @media (max-width: 900px) {
    .birthday {
      font-size: 1.35rem;
    }
  }
  @media (max-width: 600px) {
    .birthday {
      font-size: 1.2rem;
    }
  }
`
