import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { CountDown } from "../../components"
import { Container } from "./styles"
import GithubLogo from "../../assets/githubLogo.svg"
import { Helmet } from "react-helmet"

const Birthday = ({ name, day, month }) => {
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
    loaded: false,
    isItBirthday: false,
  })

  if (name === undefined || day === undefined || month === undefined) {
    // This is if not enough params are provided
    name = "Naser"
    month = 10
    day = 26
  }

  // get current date
  const currentDate = new Date()
  // get current year
  const currentYear = currentDate.getFullYear()
  // Getting the Birthday in Data Object
  // WE subtract 1 from month ; Months start from 0 in Date Object
  // Birthday Boolean
  const isItBirthday =
    currentDate.getDate() === +day && currentDate.getMonth() === month - 1

  useEffect(() => {
    setInterval(() => {
      const countDown = () => {
        // Getting the Current Date
        const dateAtm = new Date()

        // if the Birthday has passed
        let birthdayDay = new Date(currentYear, month - 1, day)
        // then set the Birthday countdown for next year
        if (dateAtm > birthdayDay) {
          birthdayDay = new Date(currentYear + 1, month - 1, day)
          // } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
          //   console.log("asd")
          //   birthdayDay = new Date(currentYear, month - 1, day)
        }

        // Getting Current Time
        const currentTime = dateAtm.getTime()
        // Getting the Birthday Time
        const birthdayTime = birthdayDay.getTime()
        // Time remaining for the Birthday
        const timeRemaining = birthdayTime - currentTime

        let seconds = Math.floor(timeRemaining / 1000)
        let minutes = Math.floor(seconds / 60)
        let hours = Math.floor(minutes / 60)
        let days = Math.floor(hours / 24)

        seconds %= 60
        minutes %= 60
        hours %= 24

        // Setting States
        setState((prevState) => ({
          ...prevState,
          seconds,
          minutes,
          hours,
          days,
          loaded: true,
          isItBirthday,
        }))
      }
      if (!isItBirthday) {
        countDown()
      } else {
        setState((prevState) => ({
          ...prevState,
          loaded: true,
          isItBirthday: true,
        }))
      }
    }, 1000)
  }, [currentYear, day, isItBirthday, month])

  let birth = new Date(currentYear, month - 1, day)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  let monthBirthday = monthNames[birth.getMonth()]

  return (
    <>
      <Helmet>
        <title>{name} | Birthday</title>
      </Helmet>
      <Container>
        <CountDown countDownData={state} name={name} />
        <div className="birthday">
          Birth-Date: {day} {monthBirthday} {currentYear}
        </div>
        <div className="credits">
          <a
            href="https://github.com/naseralmuhana/React-Birthday-Wisher"
            title="Source"
          >
            <img src={GithubLogo} alt="Github-Logo" className="github-logo" />
          </a>
        </div>
        <Link to="/generate">Generate Here</Link>
      </Container>
    </>
  )
}

export default Birthday
