# Regular old code

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-neighbor-sum-service/solutions/6031552/](https://leetcode.com/problems/design-neighbor-sum-service/solutions/6031552/)

---


# Code
```racket []
(define neighbor-sum%
  (class object%
    (super-new)

    (field
     ;                  UP   DOWN   LEFT  RIGHT
     (adj-neighbors '((-1 0) (1 0) (0 -1) (0 1)))

     ;                UP-LEFT UP-RIGHT DOWN-LEFT DOWN-RIGHT
     (diag-neighbors '((-1 -1) (-1 1) (1 -1) (1 1)))
     )

    ; grid : (listof (listof exact-integer?))
    (init-field
     grid)

    (define [valid-cell? cell]
      (and (<= 0 (first cell)) (< (first cell) (length grid))
           (<= 0 (second cell)) (< (second cell) (length (first grid)))
           ))

    (define [cell->value cell] (list-ref (list-ref grid (first cell)) (second cell)))

    (define [value->cell v]
      (for/fold ((rslt 'none))
                ((r (range (length grid)))
                 (row grid))
        (let ((c (index-of row v)))
          (if c (list r c) rslt)
          )))

    (define [valid-neighbors cell neighbors]
      (let ((cr (first cell)) (cc (second cell)))
        (filter valid-cell?
                (map [\u03BB (an) (list (+ cr (first an)) (+ cc (second an)))]
                     neighbors)
                ))
      )

    (define [adjacent-neighbors cell] (valid-neighbors cell adj-neighbors))

    (define [diagonal-neighbors cell] (valid-neighbors cell diag-neighbors))

    (define [sum value neighbors-func]
      (define neighbors (neighbors-func (value->cell value)))
      (apply + (map cell->value neighbors))
      )

    ; adjacent-sum : exact-integer? -> exact-integer?
    (define/public (adjacent-sum value) (sum value adjacent-neighbors))

    ; diagonal-sum : exact-integer? -> exact-integer?
    (define/public (diagonal-sum value) (sum value diagonal-neighbors))

    )
  )

```