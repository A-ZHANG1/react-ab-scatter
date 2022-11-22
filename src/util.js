export const calculateScale = (data, axis = 'x') => {
  const arr = data.metricsA.concat(data.metricsB)
  const max = Math.max(...arr.map((o) => o[axis]))
  const min = Math.min(...arr.map((o) => o[axis]))
  return [min, max]
}
