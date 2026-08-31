# racket 0ms using andmap

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/special-array-i/solutions/6060012/](https://leetcode.com/problems/special-array-i/solutions/6060012/)

---

# Code
```racket []
(define (is-array-special nums)
  (andmap (lambda (a b) (= 1 (+ (remainder a 2)
                                (remainder b 2))))
          (take nums (sub1 (length nums)))
          (cdr nums)))
```