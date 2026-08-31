# Racket ( map, set )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4053030/](https://leetcode.com/problems/points-that-intersect-with-cars/solutions/4053030/)

---

Generate list of all intersections and reduce to distinct ones.
```
(define/contract (number-of-points nums)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (let ((secs (flatten (map ; intersections
                         (lambda (pair)
                           (range (car pair)
                                  (add1 (cadr pair))))
                         nums))))
    (set-count (list->set secs))))
```