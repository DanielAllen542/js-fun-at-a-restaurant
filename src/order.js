function takeOrder(order, arr) {
  (arr.length < 3) ? arr.push(order): ''
}

function refundOrder(pos, arr) {
  for (var i = 0, run = arr.length; i < run; i++) {
    (arr[i] == undefined || arr[i].orderNumber != pos) ? arr.push(arr.shift()): arr.shift()
  }
}

function listItems(arr) {
  return arr.reduce((sum, cur) => {
    return `${sum}, ${cur.item}`
  }, ``).slice(2)
}

function searchOrder(arr, item) {
  return arr.reduce((isInPrev ,cur) => {
    return (cur.item === item) || isInPrev
  })
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
