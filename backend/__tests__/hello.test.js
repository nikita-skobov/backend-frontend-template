/* global describe it expect */
const lambdaTester = require('lambda-tester')
const { hello } = require('../handler')

const lt = lambdaTester

describe('Testing hello handler with proper input', () => {
  const bodySource = { name: 'Nikita' }
  const body = JSON.stringify(bodySource)
  const event = { body }

  it('should have a 200 status code', () => lt(hello)
    .event(event)
    .expectResolve((result) => {
      expect(result.statusCode).toBe(200)
    }))

  it('should return a JSON stringified body', () => lt(hello)
    .event(event)
    .expectResolve((result) => {
      expect(typeof result.body).toBe('string')
    }))

  it('body should be JSON parsable', () => lt(hello)
    .event(event)
    .expectResolve((result) => {
      expect(() => {
        JSON.parse(result.body)
      }).not.toThrow()
    }))

  it('body should have an input and a message', () => lt(hello)
    .event(event)
    .expectResolve((result) => {
      const resultBody = JSON.parse(result.body)
      expect(resultBody).toHaveProperty('input')
      expect(resultBody).toHaveProperty('message')
    }))

  it(`message should say Hello ${bodySource.name}`, () => lt(hello)
    .event(event)
    .expectResolve((result) => {
      const { message } = JSON.parse(result.body)
      expect(message).toBe(`Hello ${bodySource.name}`)
    }))
})
