# Racket ( recursive )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/3960294/](https://leetcode.com/problems/integer-replacement/solutions/3960294/)

---

```
(define/contract (integer-replacement n)
  (-> exact-integer? exact-integer?)
  (cond ((= 1 n) 0)
        ((integer? (log n 2)) (inexact->exact (log n 2)))
        ((even? n) (add1 (integer-replacement (/ n 2))))
        (else (add1 (min (integer-replacement (add1 n))
                         (integer-replacement (sub1 n)))))))
```