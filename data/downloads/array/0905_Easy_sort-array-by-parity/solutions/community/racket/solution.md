# One line racket [Lisp] Solution

**Author:** derehaki
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-array-by-parity/solutions/2002598/](https://leetcode.com/problems/sort-array-by-parity/solutions/2002598/)

---

Simple Racket Solution
```
(define (sort-array-by-parity n)
  (append (filter even? n) (filter odd? n))
)
```