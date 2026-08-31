# define/match and recursion

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/6031597/](https://leetcode.com/problems/convert-1d-array-into-2d-array/solutions/6031597/)

---

Perfect use for `define/match`

# Code
```racket []
(define/contract (construct2-d-array original m n)
  (-> (listof exact-integer?) exact-integer? exact-integer? (listof (listof exact-integer?)))

  (define/match (construct original result)
    [('() _) (reverse result)]
    [(_ _) (construct (drop original n) (cons (take original n) result))]
    )

  (if ((negate =) (length original) (* m n))
      '()
      (construct original '())
      )
)
```