# `for*/list` to gen all cells' coordinates

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/6020802/](https://leetcode.com/problems/matrix-cells-in-distance-order/solutions/6020802/)

---

Build all cells' coordinates, calc distance, sort (the tuple of `(distance, cell)`) and then return cells.

# Code
```racket []
(define/contract (all-cells-dist-order rows cols rCenter cCenter)
  (-> exact-integer? exact-integer? exact-integer? exact-integer? (listof (listof exact-integer?)))

  (define [distance r c]
    (+ (abs (- rCenter r)) (abs (- cCenter c))))

  (define result
    (map cdr
         (sort
          (for*/list ((row (in-range rows)) (col (in-range cols)))
            (let ((d (distance row col)) (cell (list row col)))
              (cons d cell)
              ))
          < #:key car)
         )
    )

  result
  )

```