# Racket Solution

**Author:** lpellowski
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/5204010/](https://leetcode.com/problems/smallest-even-multiple/solutions/5204010/)

---

# Intuition
If n is even, just return n. If n is odd, then you have to return 2*n.
<!-- Describe your first thoughts on how to solve this problem. -->


<!-- Describe your approach to solving the problem. -->


<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
(define/contract (smallest-even-multiple n)
  (-> exact-integer? exact-integer?)
    (cond
        [(even? n) n]
        [(odd? n) (* 2 n)])
  )
```