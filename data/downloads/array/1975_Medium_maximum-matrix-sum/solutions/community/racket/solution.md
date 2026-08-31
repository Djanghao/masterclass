# racket 4ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-matrix-sum/solutions/6080165/](https://leetcode.com/problems/maximum-matrix-sum/solutions/6080165/)

---

# Intuition
Improved on my previous submission. Same intuition, just a more effecient implementation.

# Code
```racket []
(define (max-matrix-sum matrix)
  (let* ([mn (expt 10 6)]
         [neg-count 0]
         [mat-sum
          (for*/sum ([x (in-list matrix)]
                     [y (in-list x)])
            (when (< (abs y) mn) (set! mn (abs y)))
            (when (negative? y) (set! neg-count (add1 neg-count)))
            (abs y))])
    (if (zero? (modulo neg-count 2))
        mat-sum
        (- mat-sum mn mn))))
```