# Racket solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4270619/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4270619/)

---

# Code
```
(define/contract (count-homogenous s)
  (-> string? exact-integer?)
  
  (define count 0.0)
  (define last #\\0)
  (define total-homogenous 0)
  
  (for ([char (string->list s)])
    (if (char=? char last)
        (set! count (+ count 1.0))
        (begin
          (set! total-homogenous
                (+ total-homogenous (inexact->exact (floor (/ (+ (expt count 2) count) 2))))
                )
          (set! count 1.0)
          (set! last char)
          )
        )
    )
  
  (set! total-homogenous
        (+ total-homogenous (inexact->exact (floor (/ (+ (expt count 2) count) 2)))
        )
  )
  
  (modulo total-homogenous 1000000007)
  )

```