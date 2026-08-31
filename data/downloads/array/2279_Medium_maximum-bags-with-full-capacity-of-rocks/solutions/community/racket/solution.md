# racket 29ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/6021565/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/6021565/)

---

# Intuition
Greedily fill up bags beginning with those that need the fewest additional rocks to become full.

# Code
```racket []
(define (maximum-bags cp ro ad)
  (let ([diffs (sort (map - cp ro) <)])
    (let loop ([diffs diffs] [ad ad])
      (if (or (null? diffs) (> (car diffs) ad))
          0
          (add1 (loop (cdr diffs) (- ad (car diffs))))))))
```