const compactNumberFormatter = new Intl.NumberFormat(undefined, { notation: 'compact' })

export const formatCompactNumber = (number: number) => {
  return compactNumberFormatter.format(number);
}