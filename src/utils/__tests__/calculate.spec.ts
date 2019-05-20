import { calculate, calTotalPrice } from '../calculate'

describe('Calculate', () => {
  test('Should calculate Vat 7% correctly', () => {
    expect(calculate(100, 7)).toEqual(107)
  })

  test('Should calculate Service charge 10% correctly', () => {
    expect(calculate(107, 10)).toEqual(117.7)
  })

  test('Should calculate total price with service charge correctly', () => {
    expect(calTotalPrice(100, 10, null)).toEqual(110)
  })

  test('Should calculate total price with vat correctly', () => {
    expect(calTotalPrice(100, null, 7)).toEqual(107)
  })

  test('Should calculate total price include service charge and vat correctly', () => {
    expect(calTotalPrice(100, 10, 7)).toEqual(117.7)
  })
})
