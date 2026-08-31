# Racket binary search

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/koko-eating-bananas/solutions/4128906/](https://leetcode.com/problems/koko-eating-bananas/solutions/4128906/)

---

# Approach
Binary search from 1 to max in piles. At each step, see if it's possible for Koko to finish the bananas in time. Keep going until the min rate >= max rate, then return the min 

# Complexity
~ $$O(log(n))$$

# Code
```
(define (min-eating-speed piles h)
  (define (check-if-possible k)
    (<= (foldl + 0
               (map (\u03BB (v) (let-values ([(q r) (quotient/remainder v (max k 1))])
                             (match r
                               [0 q]
                               [_ (add1 q)])))
                    piles))
        h))
  (let bsearch ([lhs 1] [rhs (apply max piles)])
    (let ([mid (quotient (+ lhs rhs) 2)])
      (cond [(>= lhs rhs) lhs]
            [(check-if-possible mid) (bsearch lhs mid)]
            [else (bsearch (add1 mid) rhs)]))))
```