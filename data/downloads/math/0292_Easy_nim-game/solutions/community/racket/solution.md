# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/nim-game/solutions/4966466/](https://leetcode.com/problems/nim-game/solutions/4966466/)

---

# Code
```
(define/contract (can-win-nim n)
  (-> exact-integer? boolean?)
    (if (zero? (remainder n 4)) #f #t)
  )
```