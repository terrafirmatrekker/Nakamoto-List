import React, { Component } from 'react';
import Web3 from 'web3'
import logo from '../logo.gif';
import './App.css';
import Marketplace from '../abis/Marketplace.json'

class App extends Component {

  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    //Load accounts
    const accounts = await web3.eth.getAccounts()
    this.setState({account: accounts[0]})
    const networkId = await web3.eth.net.getId()
    const networkData = Marketplace.networks= Marketplace.networks[networkId]
    if (networkData) {
      const marketplace = web3.eth.Contract(Marketplace.abi, networkData.address)
    } else {
      window.alert("Markeplace contract isn't deployed to detected network.")

    }
    
  }

  constructor(props) {
    super(props)
    this.state = {
      account: '',
      productCont: 0,
      products: [],
      loading: true
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="Nakamoto List"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nakamoto List
          </a>
          <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
            <small className="text-white"><span id="account">Account: {this.state.account}</span></small>
          </li>
        </ul>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="Nakamoto List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <h1>Nakamoto List</h1>
                <p>
                  Welcome to Web3's Marketplace!
                </p>
                <a
                  className="App-link"
                  href="Nakamoto List"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY GOODS <u><b>NOW! </b></u>
                </a>
              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
