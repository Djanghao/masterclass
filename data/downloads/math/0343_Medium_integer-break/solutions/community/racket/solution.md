# Racket Solusion

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-break/solutions/4135991/](https://leetcode.com/problems/integer-break/solutions/4135991/)

---




# Code
```
(define/contract (integer-break n)
  (-> exact-integer? exact-integer?)
  (define (cal k)
    (let* ((extra (remainder n k)))
      (* (expt (ceiling (/ n k)) extra)
         (expt (floor (/ n k)) (- k extra)))))
  (apply max (map cal (inclusive-range 2 n))))
```