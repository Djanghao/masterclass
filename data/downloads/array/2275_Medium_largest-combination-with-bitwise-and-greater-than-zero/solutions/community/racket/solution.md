# Racket 374ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6021468/](https://leetcode.com/problems/largest-combination-with-bitwise-and-greater-than-zero/solutions/6021468/)

---

# Intuition
Maintain a dictionary of all positions where a bit is set, then choose whichever position has the most bits set across the list.

# Code
```racket []
(define (largest-combination L)
  (let ([memo (make-hash)])
    (for ([x (in-list L)])
      (for ([i (integer-length x)])
        (when (bitwise-bit-set? x i)
          (hash-set! memo i (add1 (hash-ref memo i 0))))))
    (apply max (hash-values memo))))
```