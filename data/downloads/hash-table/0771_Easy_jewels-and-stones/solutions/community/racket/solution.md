# Racket one liner

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/jewels-and-stones/solutions/1251670/](https://leetcode.com/problems/jewels-and-stones/solutions/1251670/)

---

```scheme
(define/contract (num-jewels-in-stones jewels stones)
  (-> string? string? exact-integer?)
  (foldl (\u03BB (x a) (if (member x (string->list jewels)) (add1 a) a)) 0 (string->list stones)))
```