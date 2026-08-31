# Flatten then group by # of columns

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/reshape-the-matrix/solutions/6016871/](https://leetcode.com/problems/reshape-the-matrix/solutions/6016871/)

---

As the title says:

1. Flatten it down to just a list of nums
2. Then yank off `c` at a time (via `take` and `drop`)

# Code
```racket []
(define/contract (matrix-reshape mat r c)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer? (listof (listof exact-integer?)))

  (let (
        (mat-r (length mat))
        (mat-c (length (list-ref mat 0)))
        )
    (if ((negate =) (* mat-r mat-c) (* r c))
        mat
        (let* (
               (as-list (flatten mat))
               (regrouped (let loop [(as-list as-list) (result '())]
                            (if (null? as-list)
                                (reverse result)
                                (loop (drop as-list c) (cons (take as-list c) result)))))
               )
          regrouped
          )
        )
    )
  )

```