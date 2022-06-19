import { Routes, Route, Navigate } from "react-router-dom"
import { Generate, Birthday, RouterBirthday } from "./containers"
import { GlobalStyle } from "./styles"

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Birthday />} />
        <Route
          exact
          path="/birthday/:name/:day/:month"
          element={<RouterBirthday />}
        />
        <Route path="/generate" element={<Generate />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  )
}

export default App
