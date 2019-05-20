import formatNumber from '../formatNumber'

describe('formatNumber', () => {
  test('Should parse number format correctly', () => {
    expect(formatNumber(1000)).toEqual('1,000')
    expect(formatNumber(1000000)).toEqual('1,000,000')
    expect(formatNumber(10000.123)).toEqual('10,000.12')
  })
})
