# 2-lines declarative/functional solution with O(n) time complexity

**Author:** dmitryx64
**Votes:** 2
**Link:** [https://leetcode.com/problems/fibonacci-number/solutions/3677219/](https://leetcode.com/problems/fibonacci-number/solutions/3677219/)

---

## Intuition

The first idea that comes to mind is to use the recursive definition of a Fibonacci number itself as a solution `fib(n) = fib(n - 1) + fib(n - 2)`. But the complexity of the solution is $$O(2^n)$$.

The solution would be to go with the procedural variation:

```javascript
function fib(n) {
  let a = 0;
  let b = 1;
  while (n > 0) {
    [a, b] = [b, a + b];
    n--;
  }
  return a;
}
```

But this is too verbose and imperative, which is not acceptable for those who is reading this solution :).

## Approach

The solution would be to implement the same dynamic programming algorithm but with the functional programming flavour. We can easily do it by passing 2 extra numbers to the `fib` function, since knowing 2 consequitive Fibonacci numbers we can continue the sequence.

```javascript
const next2Fib = (a, b) => [b, a + b];

next2Fib(0, 1) // [1, 1]
next2Fib(1, 1) // [1, 2]
next2Fib(1, 2) // [2, 3]
next2Fib(2, 3) // [3, 5]
next2Fib(3, 5) // [5, 8]
// and so on ...
```

So using this function and organizing a recursion we can solve Nth Fibonacci number for N such steps.

## Complexity

- Time complexity:
    + $$O(n)$$
- Space complexity:
    + $$O(1)$$ for functional languages that support tail-call optimization/tail recursion
    + $$O(n)$$ for languages that don't support it

## Code


### JavaScript
```javascript
const fib(n, a = 0, b = 1) =>
    n === 0 ?
        a :
        fib(n - 1, b, a + b);
```
Since JS does not support tail-call optimization, this function will create extra `n` call stack frames, which requires $$O(n)$$ additional memory.

### Scala

```scala
import scala.annotation.tailrec

object Solution {
  @tailrec
  def fib(n: Int, a: Int = 0, b: Int = 1): Int =
    if (n == 0) a
    else fib(n - 1, b, a + b)
}
```

`@tailrec` annotation allows optimization for this code so it won't use any extra memory.

### Kotlin

Kotlin solution is almost the same.

```kotlin
class Solution {
  tailrec fun fib(n: Int, a: Int = 0, b: Int = 1): Int =
    if (n == 0) a
    else fib(n - 1, b, a + b)
}
```