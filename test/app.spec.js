/* eslint-disable no-undef */
const assert = require('assert')
const { addNum, subNum } = require('../src/add')
const { expect } = require('chai')

describe('the add function', () => {
  it('should add 2 numbers together', () => {
    const result = addNum(2, 2)
    assert.equal(result, 4)
  })

  it('should be able to handle 1 number', () => {
    const result = addNum(2)
    expect(result).to.be.eq(2)
  })

  it('should be able to handle 0 number', () => {
    const result = addNum()
    expect(result).to.be.eq(0)
  })

  it('should return 0 if either argument is not a number', () => {
    const result = subNum(2, 'test')
    expect(result).to.be.eq(0)
  })
})
