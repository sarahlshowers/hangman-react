import chai, {expect} from 'chai'
import chaiChange from 'chai-change'


chai.use(chaiChange)

describe('HangmanGame', () => {
  'use strict'

  it('exists', () => {
    expect(HangmanGame).to.be.a.('component')
  })

  
})
