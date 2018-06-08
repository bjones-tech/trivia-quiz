export const rand = (max, min = 0) => Math.floor(Math.random() * (max - min + 1)) + min

export const getUniqueKeys = (length, count = 2) => {
  const allKeys = Array.from({ length: length }, (val, key) => key)

  let uniqueKeys = []

  if (+count > +length) {
    return uniqueKeys
  }

  while (uniqueKeys.length !== count) {
    uniqueKeys = Array.from({ length: count }, () => allKeys[rand(allKeys.length - 1)]).reduce((obj, val) => {
      if (!obj.some(x => x === val)) {
        obj.push(val)
      }
      return obj
    }, [])
  }

  return uniqueKeys
}