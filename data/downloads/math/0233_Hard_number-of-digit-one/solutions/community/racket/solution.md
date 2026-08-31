# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-digit-one/solutions/4842944/](https://leetcode.com/problems/number-of-digit-one/solutions/4842944/)

---

# Code
```racket
(define/contract (ilog10 n) (-> exact-integer? exact-integer?) 
    (if (< n 10) 0 (add1 (ilog10 (quotient n 10))) )
)

(define/contract (count-digit-one n)
  (-> exact-integer? exact-integer?)
  (cond 
    [(= n 0) 0]
    [(< n 10) 1]
    [else (let* 
        ([k (expt 10 (ilog10 n))] [q (quotient n k)][r (remainder n k)])
        (+ (if (> q 1) k (add1 r)) (* (count-digit-one (sub1 k)) q) (count-digit-one r))
    )]))
```