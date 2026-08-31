# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-a-2d-matrix/solutions/3874113/](https://leetcode.com/problems/search-a-2d-matrix/solutions/3874113/)

---

```
(define/contract (search-matrix matrix target)
  (-> (listof (listof exact-integer?)) exact-integer? boolean?)
  (not (equal? #f (member target (apply append matrix)))))
```