# The simplest (1 line) Racket solution

**Author:** Antonekk
**Votes:** 0
**Link:** [https://leetcode.com/problems/concatenation-of-array/solutions/3933665/](https://leetcode.com/problems/concatenation-of-array/solutions/3933665/)

---


# Code
```
(define/contract (get-concatenation nums)
  (-> (listof exact-integer?) (listof exact-integer?))
    ;Simple Racket solution
    (append nums nums)
  )
```