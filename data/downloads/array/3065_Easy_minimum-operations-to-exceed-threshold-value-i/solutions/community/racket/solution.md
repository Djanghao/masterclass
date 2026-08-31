# racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6024824/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/6024824/)

---


# Code
```racket []
(define/contract (min-operations nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (count (lambda (x) (< x k)) nums)
  )
```