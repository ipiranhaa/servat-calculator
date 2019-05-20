export const calculate = (price: number, percent: number) => {
  return price + price * (percent / 100)
}

export const calTotalPrice = (price: number, serviceCharge: number, vat: number) => {
  let result: number = price
  if (serviceCharge) {
    result = calculate(result, serviceCharge)
  }
  if (vat) {
    result = calculate(result, vat)
  }
  return result
}
