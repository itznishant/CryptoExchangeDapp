import React, { Component } from 'react'
import BuyForm from './BuyForm'
import SellForm from './SellForm'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'BUY'
    }
  }

  render() {
    let content
    if(this.state.currentForm === 'BUY') {
     content = <BuyForm
        ethBalance   = {this.props.ethBalance}
        tokenBalance = {this.props.tokenBalance}
        buyTokens    = {this.props.buyTokens}
      />

    } else {
      content = <SellForm
        ethBalance   = {this.props.ethBalance}
        tokenBalance = {this.props.tokenBalance}
        sellTokens    = {this.props.sellTokens}
      />
    }
    return (
      <div id="content" className="mt-3">

        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'BUY' }) 
              }}
            >
            BUY

           </button>

         <span className="text-muted">&lt; &nbsp; &gt;</span>
          <button
              className="btn btn-dark"
              onClick={(event) => {
                this.setState({ currentForm: 'SELL' }) 
              }} 
            >
            SELL
          </button>
        </div>
        <div className="card mb-4" >

          <div className="card-body">

          {content}
 
          </div>

        </div>

      </div>
  	);
  }
}

export default Main;