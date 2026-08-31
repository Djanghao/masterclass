# Racket Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371182/](https://leetcode.com/problems/calculate-money-in-leetcode-bank/solutions/4371182/)

---

# Code
```
(define/contract (total-money n)
  (-> exact-integer? exact-integer?)
  (if (<= n 7)
      (summation n)
      (let* ((m (quotient n 7))
             (l (remainder n 7))
             (res 0)
             (i 0)
             (it 0))
        (for ([i (in-range m)])
          (set! res (+ res (- (summation (+ 7 i)) (summation i))))
          (set! it (add1 it)))
        (set! i it)
        (set! res (+ res (- (summation (+ l i)) (summation i))))
        res)))

(define (summation n)
  (/ (+ (* n n) n) 2))


```