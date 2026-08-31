# Build diagonals' indecies, find the primes, sort & return

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/6028124/](https://leetcode.com/problems/prime-in-diagonal/solutions/6028124/)

---

See title.

# Code
```racket []
(require math/number-theory)

(define/contract (diagonal-prime nums)
  (-> (listof (listof exact-integer?)) exact-integer?)

  (define [cell r c] (list-ref (list-ref nums r) c))

  (define (build-diag-indecies nums)
    (for/list (
               (r (range (length nums)))
               (c (range ((compose sub1 length) nums) -1 -1))
               )
      (set (list r r) (list r c))
      )
    )

  (define indecies
    (foldl set-union (set)
           (build-diag-indecies nums)
           )
    )

  (define primes
    (filter prime?
            (map (curry apply cell) (set->list indecies))
            ))

  (if (null? primes)
      0
      (car (sort primes > #:key identity))
      )
  )

```