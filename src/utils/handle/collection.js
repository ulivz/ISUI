export function isContain(item, collection) {
  for (let _item of collection) {
    if (item === _item) {
      return true
    }
  }
  return false
}
