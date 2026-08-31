# Racket, no mutable state

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648107/](https://leetcode.com/problems/maximum-number-of-points-with-cost/solutions/5648107/)

---

# Approach
This is standard DP approach.

For each cell, we will find the maximum points we could achieve if we were to pick that cell and a cell in each row above it (ignoring the rows below it). We will compute this value row-by-row, starting from the top one.

To compute each row, we need to find the maximum of two cases: the previous picked cell can be either to the left or to the right of the current one. Computing these cases requires one left-to-right and one right-to-left pass, correspondingly.

# Code
```racket
(define/contract (max-points points)
    (-> (listof (listof exact-integer?)) exact-integer?)
    (define n (length (car points)))
    (define max-points (for/fold ([max-points (make-vector n 0)]) ([points-row-lst points])
        (define points-row (list->vector points-row-lst))
        (define new-max-points-l (let recurse ([i 0] [m 0] [tail null])
            (if (<= n i) tail (let ([m1 (max (sub1 m) (vector-ref max-points i))])
                (recurse (add1 i) m1 (cons (+ m1 (vector-ref points-row i)) tail))))))
        (define new-max-points-r (let recurse ([i (sub1 n)] [m 0] [tail null])
            (if (> 0 i) tail (let ([m1 (max (sub1 m) (vector-ref max-points i))])
                (recurse (sub1 i) m1 (cons (+ m1 (vector-ref points-row i)) tail))))))
        (for/vector ([l (reverse new-max-points-l)] [r new-max-points-r]) (max r l))))
    (sequence-fold max 0 max-points))
```