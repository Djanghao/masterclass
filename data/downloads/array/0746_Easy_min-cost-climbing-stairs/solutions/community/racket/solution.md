# Dead simple O(n) time, O(1) space solution with pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4525665/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4525665/)

---

# Code
``` Racket
(define (min-cost-climbing-stairs cost)
    (let dp ([l (reverse cost)] [fst 0] [snd 0])
      (match l
        ['() (min fst snd)]
        [(cons x xs) (dp xs (min (+ x fst) (+ x snd)) fst)])))
```