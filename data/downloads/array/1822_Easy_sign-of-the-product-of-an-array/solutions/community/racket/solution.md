# Simplest possible Racket solution using apply

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/4489298/](https://leetcode.com/problems/sign-of-the-product-of-an-array/solutions/4489298/)

---

# Code
```
(define (array-sign nums)
  (sgn (apply * nums)))
```