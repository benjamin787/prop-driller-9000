import React from 'react';
import './App.css';
import ProptimusOmega from './proptimusOmega'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      callForHelp: "https://i.pinimg.com/originals/f8/7d/ec/f87dec9d6334af383a27f73e48ccf154.png",
      proptimusPhotos: {
        "Proptimus Prime": "http://pngimg.com/uploads/transformers/transformers_PNG3.png",
        "Proptimus Beta": "https://library.kissclipart.com/20181004/jbw/kissclipart-alola-exeggutor-height-clipart-optimus-prime-trans-6afe73e9efab0cac.png",
        "Proptimus Omega": "https://cdn.shopify.com/s/files/1/0076/4103/8906/products/Transformers-Movie-Studio-Series-38-Voyager-G1-Optimus-Prime-Semi-truck-Render_1024x1024.png?v=1549582726",
      },
    }
  }


  callForBadHelp = (event) => {
    this.setState({
      proptimusPhotos: "Proptimus Omega"
    })
  }

  callForBetterHelp = (event) => {
    this.setState({
      proptimusPhotos: "Proptimus Beta"
    })
  }

  gimmeAllYouGot = (event) => {
    this.setState({
      proptimusPhotos: "Proptimus Prime"
    })
  }

  sendThemHome = (event) => {
    this.setState({
      proptimusPhotos: ""
    })
  }

    // const autobots = this.state.proptimusPhotos.map(autobot => {
    //   return <Proptimus key={autobot.proptimusPhotos} name={autobot.proptimusPhotos} />
    // })
  //   const autobot = this.state.proptimusPhotos.filter(bot => {
  //     bot === 
  //   })
  // }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <img
            src={this.state.callForHelp}
            className="App-logo"
            alt="logo"
            onClick={this.callForBadHelp}
          />
          
          {this.state && this.state.activeProp === "" /*Which Proptobot should be checked for?*/ &&
          <>
            <p className="">Will this do, human?</p>
            <ProptimusOmega /*Specify your Proptobot here.*/
              /*You need to pass all of your props to this component here.*/
              key={this.state.proptimusPhotos}
              callForHelp={this.state.callForHelp}
              proptimusPhotos={this.state.proptimusPhotos}

            />
          </>
          }

        </header>
      </div>
    );
  }
}
