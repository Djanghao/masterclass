# Simple racket solution

**Author:** yoshissac6
**Votes:** 0
**Link:** [https://leetcode.com/problems/add-binary/solutions/3182997/](https://leetcode.com/problems/add-binary/solutions/3182997/)

---

# Code
```
(define/contract (add-binary a b)
  (-> string? string? string?)
  (number->string (+ (string->number a 2) (string->number b 2)) 2)
  )
```