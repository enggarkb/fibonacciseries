const chai = window.chai
const expect = chai.expect
describe('generate_Fibonacci', () => {
  it('should generate fibonacci series', () => {
    expect(generate_Fibonacci(3)).to.deep.equal('1 1 2')
    expect(generate_Fibonacci(4)).to.deep.equal('1 1 2 3')
    expect(generate_Fibonacci(5)).to.deep.equal('1 1 2 3 5')


  })
})
