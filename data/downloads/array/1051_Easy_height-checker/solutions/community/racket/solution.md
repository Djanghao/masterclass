# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/height-checker/solutions/5286572/](https://leetcode.com/problems/height-checker/solutions/5286572/)

---

# Code
```racket
(define/contract (height-checker heights)
  (-> (listof exact-integer?) exact-integer?)
  (for/sum 
    ([i heights][j (sort heights <)])
    (if (= i j) 0 1)))
```