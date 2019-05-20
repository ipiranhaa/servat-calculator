function formatNumber(price: number) {
  let output: number | string = price
  if (price % 1 !== 0) {
    output = price.toFixed(2)
  }
  return output.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

export default formatNumber
