# Build hash col->maxs (via transpose) and replace

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/modify-the-matrix/solutions/6028335/](https://leetcode.com/problems/modify-the-matrix/solutions/6028335/)

---

* transpose matrix to use `max` to find col maxes
* `indexes-of` is nice to get the indexes for all `-1`s

# Code
```racket []
(define/contract (modified-matrix matrix)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))

  (define transpose (curry apply map list))

  (define col-maxs
    (let* ((matrix-t (transpose matrix))
           (idx-max (map list (range (length matrix-t)) (map (curry apply max) matrix-t)))
           )
      (apply hash (flatten idx-max))
      )
    )

  (for/list ((row matrix))
    (foldl [\u03BB (idx row) (list-set row idx (hash-ref col-maxs idx))]
           row
           (indexes-of row -1))
    )
  )

```