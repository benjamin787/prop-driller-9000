import React from 'react';

export default class ProptimusOmega extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      escalate: false,
    }
  }

  escalate = (event) => {
    this.setState({
      escalate: !this.escalate
    })
  }


  render() {
    return(
      <section>
        <img
          src={this.props.proptimusPhotos}
          className="App-logo"
          alt="logo"
          onClick={this.escalate}
        />
        <p>{this.props.catchPhrase}</p>
      </section>
    )
  }
}
