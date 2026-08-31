# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5297301/](https://leetcode.com/problems/find-the-child-who-has-the-ball-after-k-seconds/solutions/5297301/)

---

# Code
```racket
(define/contract (number-of-child n k)
  (-> exact-integer? exact-integer? exact-integer?)
  (let ([ans (remainder k (* 2 (sub1 n)))])
    (if (> ans (sub1 n)) (- (* 2 (sub1 n)) ans) ans)))
```