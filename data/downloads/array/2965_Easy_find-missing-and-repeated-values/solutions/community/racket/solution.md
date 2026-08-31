# Pattern matching!!

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6031701/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/6031701/)

---


# Code
```racket []
(define/contract (find-missing-and-repeated-values grid)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))

  (define nums (range 1 (add1 (sqr (length grid)))))

  (define [f nums from-grid (dup 0) (missing 0)]
    ;(printf "~a : ~a : ~a : ~a\
" nums from-grid dup missing)

    (match* (nums from-grid)
      ; ending cases
      [('() '()) (list dup missing)]
      [((list a) '()) (list dup a)]

      ; handle dup
      [((list a nums ...) (list a a from-grid ...)) (f nums from-grid a missing)]
      [((list b _ ...) (list a a _ ...)) (list a b)]

      ; matching (so far)
      [((list _a nums ...) (list _a from-grid ...)) (f nums from-grid dup missing)]

      ; handle missing
      [((list a nums ...) (list _b _ ...)) (f nums from-grid dup a)]
      )
    )

  (f nums (sort (flatten grid) <))
  )

```