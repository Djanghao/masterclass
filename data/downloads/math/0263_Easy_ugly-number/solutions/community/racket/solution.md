# Racket

**Author:** ctd
**Votes:** 0
**Link:** [https://leetcode.com/problems/ugly-number/solutions/2826706/](https://leetcode.com/problems/ugly-number/solutions/2826706/)

---

```
(define/contract (is-ugly n)
  (-> exact-integer? boolean?)
    (cond ((<= n 0) #f)
          ((= 1 n) #t)
          ((= 0 (modulo n 2)) (is-ugly (/ n 2)))
          ((= 0 (modulo n 3)) (is-ugly (/ n 3)))
          ((= 0 (modulo n 5)) (is-ugly (/ n 5)))
          (else #f))
  )
  ```