# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4926845/](https://leetcode.com/problems/find-greatest-common-divisor-of-array/solutions/4926845/)

---

```
(define/contract (find-gcd nums)
  (-> (listof exact-integer?) exact-integer?)
  (gcd (apply min nums)
       (apply max nums)))
```