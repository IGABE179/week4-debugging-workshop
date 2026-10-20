const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen",      price: 300,    qty: 5 },
  { name: "Bag",      price: 12000,  qty: 1 },
]

function getSubtotal(items) {
  let subtotal = 0
  //i is a counter, and items.length is the total number of items in the array. A 3-item array has indexes 0, 1, and 2, so using i <= items.length accesses an invalid index; use i < items.length instead
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty
  }
  return subtotal
}

function getDiscount(subtotal) {
  if (subtotal > 10000) return 0.1
  else if (subtotal > 20000) return 0.2
  return 0
}

function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)
  const total = subtotal - discount
  return total
}

console.log(getTotal(cart))
