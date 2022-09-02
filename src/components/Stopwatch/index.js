import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {
    timerInSeconds: 0,
    isTimerIsRunning: false,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timerInSeconds: prevState.timerInSeconds + 1,
    }))
  }

  onClickStartButton = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerIsRunning: true})
  }

  onClickStopButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerIsRunning: false})
  }

  onClickResetButton = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerIsRunning: false, timerInSeconds: 0})
  }

  getMinutes = () => {
    const {timerInSeconds} = this.state

    const minutes = Math.floor(timerInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }

    return minutes
  }

  getSeconds = () => {
    const {timerInSeconds} = this.state

    const seconds = Math.floor(timerInSeconds % 60)

    if (seconds < 10) {
      return `0${seconds}`
    }

    return seconds
  }

  render() {
    const {isTimerIsRunning} = this.state

    const displayTimer = `${this.getMinutes()}:${this.getSeconds()}`

    return (
      <div className="app-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="stop-watch-container">
          <div className="timer-image-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="timer-image"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="stop-timer">{displayTimer}</h1>
          <div className="buttons-container">
            <button
              className="start-btn button"
              type="button"
              onClick={this.onClickStartButton}
              disabled={isTimerIsRunning}
            >
              Start
            </button>
            <button
              className="stop-btn button"
              type="button"
              onClick={this.onClickStopButton}
            >
              Stop
            </button>
            <button
              className="reset-btn button"
              type="button"
              onClick={this.onClickResetButton}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
