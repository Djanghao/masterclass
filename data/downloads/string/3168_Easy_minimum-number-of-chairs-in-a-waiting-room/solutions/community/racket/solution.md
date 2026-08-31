# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5245544/](https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/solutions/5245544/)

---

# Code
```racket
(define/contract (minimum-chairs s)
  (-> string? exact-integer?)
  (let-values ([(a b) (for/fold 
    ([acc 0][max-acc 0])
    ([c s])
    (case c
        [(#\\E) (values (add1 acc) (max (add1 acc) max-acc))]
        [(#\\L) (values (sub1 acc) (max (sub1 acc) max-acc))]))])
    b))
```