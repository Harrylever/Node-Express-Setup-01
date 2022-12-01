const addNum = (a = 0, b = 0) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 0
  else return a + b
}

const subNum = (a = 0, b = 0) => {
  if (typeof a !== 'number' || typeof b !== 'number') return 0
  else return a - b
}

module.exports = { addNum, subNum }
