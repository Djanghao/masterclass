# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/2-keys-keyboard/solutions/5658438/](https://leetcode.com/problems/2-keys-keyboard/solutions/5658438/)

---

# Code
```racket
(require math/number-theory)
(define/contract (min-steps n)
  (-> exact-integer? exact-integer?)
  (apply + (map (lambda (x) (apply * x)) (factorize n))))
```