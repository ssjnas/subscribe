import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  subscribeButton = () => {
    this.setState(prevState => ({subscribe: !prevState.subscribe}))
  }

  getButton = () => {
    const {subscribe} = this.state

    return subscribe ? 'subscribed' : 'subscribe'
  }

  render() {
    const buttonText = this.getButton()
    return (
      <div className="welcome-container">
        <h1 className="heading"> Welcome </h1>
        <p className="desc"> Thank you Happy Learning</p>
        <button type="button" onClick={this.subscribeButton} className="button">
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
