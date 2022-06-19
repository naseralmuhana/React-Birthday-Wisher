import { useRef, useState } from "react"
import { Container, Form } from "./styles"
import { Link } from "react-router-dom"
import { dropdownMonths } from "../../data"
import { Helmet } from "react-helmet"

const Generate = () => {
  const currentLocation = window.location.origin
  const nameRef = useRef("")
  const dayRef = useRef(1)
  const monthRef = useRef(1)
  const [link, setLink] = useState("")

  const handleForm = (e) => {
    e.preventDefault()
    const name = nameRef.current.value
    const day = dayRef.current.value
    const month = monthRef.current.value
    setLink(`/birthday/${name}/${day}/${month}`)
  }
  return (
    <>
      <Helmet>
        <title>Generate | Birthday</title>
      </Helmet>
      <Container>
        <h1>Generate Here</h1>
        <Form onSubmit={handleForm}>
          <input type="text" placeholder="Enter Name" required ref={nameRef} />
          <input
            type="number"
            ref={dayRef}
            placeholder="Enter Day"
            defaultValue={1}
            max={31}
            required
            min={1}
          />
          <select ref={monthRef} required>
            {dropdownMonths.map(({ value, label }) => (
              <option key={`${value}-${label}`} value={value}>
                {label}
              </option>
            ))}
          </select>
          <button className="btn">Generate Link</button>
        </Form>

        {link !== "" ? (
          <>
            <p className="gen-link">{`${currentLocation}${link}`}</p>
            <Link to={link}>
              <button className="btn">Visit Link</button>
            </Link>
          </>
        ) : (
          ""
        )}
      </Container>
    </>
  )
}

export default Generate
