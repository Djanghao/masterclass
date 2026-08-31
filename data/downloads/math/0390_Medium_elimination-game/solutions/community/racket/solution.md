# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/elimination-game/solutions/5309579/](https://leetcode.com/problems/elimination-game/solutions/5309579/)

---

# Code
```racket
(define/contract (last-remaining n)
  (-> exact-integer? exact-integer?)
  (let recur ([n n][count 0])
    (if (= 1 n) 1 
        (- (* 2 (recur (quotient n 2) (add1 count)))  
           (if (and (zero? (remainder n 2)) (= 1 (remainder count 2))) 1 0)))))
```