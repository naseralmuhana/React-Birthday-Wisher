import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
:root {
  --main-bg-color-dark: #212529;
  --main-text-color-dark: #e8e8e8;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
  background-color: var(--main-bg-color-dark);
  color: var(--main-text-color-dark);
  background-color: #1d1d1d;
  overflow-x: hidden;
}
a {
  color: #7f78d2;
  font-weight: bold;
  margin-top: 20px;
}
input {
  color: var(--main-text-color-dark);
  outline: none;
  width: 300px;
  height: 40px;
  background-color: transparent;
  border: 1px rgba(255, 255, 255, 0.2) solid;
  border-radius: 5px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: 18px;
  margin: 10px;
}
select {
  width: 300px;
  height: 40px;
  background-color: transparent;
  color: var(--main-text-color-dark);

  font-family: Montserrat, sans-serif;
  border: 1px rgba(255, 255, 255, 0.164) solid;
  padding-left: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 10px;
  outline: none;
  
  & > option {
    color: rgba(255, 255, 255, 0.527);

    background-color: var(--main-bg-color-dark);
  }
}
select:focus, 
input:focus {
  border: 1px rgba(255, 255, 255, 1) solid;
  transition: all 0.5s;
}

.btn {
    width: 300px;
    height: 40px;
    margin-top: 20px;
    outline: none;
    border: 1px rgba(255, 255, 255, 0.2) solid;
    background-color: transparent;
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.719);
    font-size: 18px;
    font-weight: 700;
    &:hover {
      color: white;
    }
    &:focus {
      border: 1px rgba(255, 255, 255, 1) solid;
      transition: all 0.5s;
    }
  }
`

export default GlobalStyle
