const { assert } = require("chai")

// We can import the contract in to the test file
const Marketplace = artifacts.require('./Marketplace.sol')

contract('Marketplace', (accounts) => { // pass in a function and put tests in for Mocha & Chai
    let mkt // store deployed smart contract with mkt variable 
    before(async () => {
        mkt = await Marketplace.deployed()
    })
    
    describe('deployment', async () => {
        it('deploys successfully', async () => {
          const address = await mkt.address
          assert.notEqual(address, 0x0) // getting address and checking presence
          assert.notEqual(address, '')
          assert.notEqual(address, null)
          assert.notEqual(address, undefined)
        })
    
        it('has a name', async () => {
          const name = await mkt.name()
          assert.equal(name, 'Nakamoto List')
        })
    
      })
    })


  