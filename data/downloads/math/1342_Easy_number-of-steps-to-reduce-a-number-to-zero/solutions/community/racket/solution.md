# Racket ( recursive solution )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3765978/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/solutions/3765978/)

---

```
(define/contract (number-of-steps num)
    (-> exact-integer? exact-integer?)
    (letrec ([count-steps
                 (lambda (n count)
                     (cond [(zero? n) count]
                           [(even? n) (count-steps (/ n 2) (add1 count))]
                           [else (count-steps (sub1 n) (add1 count))]))])
      (count-steps num 0)))
```