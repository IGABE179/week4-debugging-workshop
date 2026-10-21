// RISKY VALUE: Notebook price is the string "1500", while the other prices are numbers.
// Multiplication converts "1500" to a number, but adding a string can join values instead.
// I identified this by checking the price type and comparing the multiplication and addition results in DevTools.
const cart = [
  { name: "Notebook", price: "1500", qty: 2 },
  { name: "Pen",      price: 300,    qty: 5 },
  { name: "Bag",      price: 12000,  qty: 1 },
]

function getSubtotal(items) {
  let subtotal = 0

  // The <= condition accessed an index outside the array.
  // DevTools showed the error when i = 3, even though the array had only 3 items.
  // I fixed it by changing <= to <.
  for (let i = 0; i < items.length; i++) {
    subtotal += items[i].price * items[i].qty
  }

  return subtotal
}

// DevTools showed that getDiscount(25000) returned 0.1 instead of 0.2.
// The first condition matched before the higher discount condition.
// I fixed it by checking the higher threshold first.
function getDiscount(subtotal) {
  if (subtotal > 20000) return 0.2
  else if (subtotal > 10000) return 0.1
  return 0
}
// The bug was subtracting the discount rate instead of the discount amount.
// I paused on the total line with a breakpoint, and the Scope panel showed the subtotal and discount values.
// I fixed it by multiplying the subtotal by the discount rate before subtracting it.
function getTotal(items) {
  const subtotal = getSubtotal(items)
  const discount = getDiscount(subtotal)
  const total = subtotal - (subtotal * discount)
  return total
}
console.log(getTotal(cart))
