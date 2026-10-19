# Exercise 1: Error explanations

## Snippet 1: Greeting
Error type:ReferenceError
Console message: `studentname is not defined` (errors.html:69)
What it means:Variable "studentname" was used with name started by small letter which is defferent from how it was declared.
Fix: using "studentName" instead of "studentname"

```JS:

  const studentName = "Aline"
console.log("Welcome, " + studentName)
```


## Snippet 2: Shouting
Error type:TypeError
Console message: `city.toUppercase is not a function` (errors.html:75)
What it means: "c" on case was written starting with small letter.
Fix: using "toUpperCase" instead of "toUppercase".

```JS:

const city = "Kigali"
console.log(city.toUpperCase())
```

## Snippet 3: Page title
Error type:TypeError
Console message: `Cannot set properties of null (setting 'textContent')` (errors.html:81)
What it means: heading is "page-title" while the selector was told to search for "page-titel". Therefore it found nothing.
Fix: writing title well; not titel

```JS:

const title = document.querySelector("#page-title")
title.textContent = "My Tasks"
```   

## Snippet 4: Score counter
Error type: TypeError
Console message: `Assignment to constant variable.` (errors.html:87)
What it means: a variable declared as constant can not be reassigned.
Fix:  Use let to declare the variable score.

```JS:

 let score = 0
score = score + 10
console.log(score)
```

## Snippet 5: Shopping list
Error type:SyntaxError
Console message:`Unexpected string` (errors.html:93)
What it means:a comma was supposed to be written after avocado ; before writting banana.
Fix: a comma between avocado and banana

```JS:

const fruits = ["mango", "avocado", "banana"]
console.log(fruits.length)
```

## Snippet 6: Countdown
Error type:RangeError
Console message: `Maximum call stack size exceeded` (errors.html:99)
What it means:the function calls itself again and again with no stopping point, until the call stack is full.
fix:add one line as the first line inside the function, an if that checks whether n is below 0 and, if so, does return.
 
 ```JS:

function countdown(n) {
  if (n < 0) return
  console.log(n)
  countdown(n - 1)
}
countdown(5)
```