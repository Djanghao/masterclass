# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132539/](https://leetcode.com/problems/maximize-happiness-of-selected-children/solutions/5132539/)

---

# Code
```racket
(define/contract (maximum-happiness-sum happiness k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (for/sum ([i (sort happiness >)][j (in-range k)]
    #:when (positive? (- i j))) (- i j)))
```