import { greet } from './greet'

describe('greet()', () => {
  it('greets the user', () => {
    const result = greet('John Doe')
    expect(result).toBe('Hello John Doe!')
  })
})
