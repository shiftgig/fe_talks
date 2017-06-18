# FP 101 Concepts

## Composition
It's a patter used to execute sequentials functions where the return value of the previos one is the input for the upcomming where the mathematical expressions be like:

```
   f ~ g = f(g)
```

```javascript
const compose = (...fns) => fns.reduce((acc, fn) => (...args) => acc(fn(...args)))

const sm2 = (x) => x + 2
const sm1 = (x) => (x + 1)
const total = compose(sm1, sm1, sm2)
total(2) // 6
```

## Curry
Named after Haskal Curring, it's a pattern that allow pre-execute functions passing one parameter at time.

```
Given: 
   f(x,y,z) = z * x/y
   h(z) ~ f(x/y)
```

```javascript

const curry = (fn, ...fns) => (...args) => fn.apply(this, args.concat(fns))


const sm1 = (x, y) => (x + 1) * y

const sm1Curried = curry(sm1, 5)
sm1Curried(9) // 50
```
