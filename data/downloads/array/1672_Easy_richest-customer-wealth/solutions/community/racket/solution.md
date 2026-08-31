# racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/richest-customer-wealth/solutions/5988274/](https://leetcode.com/problems/richest-customer-wealth/solutions/5988274/)

---

# Code
```racket []
(define (maximum-wealth accounts)
  (apply max (map (lambda (x) (apply + x)) accounts)))
```