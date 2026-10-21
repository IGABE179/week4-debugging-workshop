const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen",      price: 300,    qty: 5 },
  { name: "Bag",      price: 12000,  qty: 1 },
]

function getSubtotal(items) {
  let subtotal = 0
 // The bug was using i <= items.length, which accessed an index outside the array.
// I used DevTools to investigate the error and understand why the function failed.
// I fixed it by changing the condition to i < items.length.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty
  }
  return subtotal
}

//The bug was that subtotals above 20,000 received only a 10% discount.
// I used DevTools to check the function and found that the first condition ran before the second.
// I fixed it by checking the higher subtotal first so the correct discount is returned.
function getDiscount(subtotal) {
  if (subtotal > 20000) return 0.2
  else if (subtotal > 10000) return 0.1
  return 0
}

function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)
  const total = subtotal - discount
  return total
}

console.log(getTotal(cart))
