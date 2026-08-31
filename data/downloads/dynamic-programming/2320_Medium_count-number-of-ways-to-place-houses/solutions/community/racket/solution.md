# [Racket] Tail Recursive Fibonacci

**Author:** WhereDidTheBlocksGo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4830951/](https://leetcode.com/problems/count-number-of-ways-to-place-houses/solutions/4830951/)

---

# Approach
This is just the Fibonacci solution but implemented in Racket

# Complexity
- Time complexity:
    - $O(N)$
- Space complexity:
    - $O(1)$ due to tail recursion
# Code
```
(define/contract (count-house-placements n)
  (-> exact-integer? exact-integer?)
    (define MOD 1000000007)
    (define (fib x y n)
        (if (= n 0) y
            (fib y (modulo (+ x y) MOD) (sub1 n))))
    (let ((x (fib 1 1 n)))
        (modulo (* x x) MOD))
  )
```