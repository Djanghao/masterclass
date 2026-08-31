# Build-up pairs of pairs of sum of consecutive Bs and are any not 2?

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/6046035/](https://leetcode.com/problems/make-a-square-with-the-same-color/solutions/6046035/)

---

1. Count up consecutive pairs of Bs
2. Transpose so that ...
3. Sum up consecutive counts of Bs and ...
4. Is there any sum that isnt 2 (which would be a 2x2 sub-grid of half Bs, half Ws)

# Code
```racket []
(define/contract (can-make-square grid (n 2) (m 2))
  (-> (listof (listof char?)) boolean?)

  (define transpose (curry apply map list))

  (define [build-pairs rows f]
    (map second
         (for/list ((row rows))
           (foldl [\u03BB (e a) (list e (f (first a) e (second a)))] (list (car row) '()) (cdr row))
           )))

  ; new grid where we count the number of #\\Bs in all consecutative pairs in each row
  (define count-consecutive-Bs
    (build-pairs grid
                 [match-lambda** ;(previous-letter current-letter acc)
                  ([#\\B #\\B result] [cons 2 result])
                  ([#\\W #\\W result] [cons 0 result])
                  ([_ _ result] [cons 1 result])
                  ]))

  (define count-consecutive-Bs-t (transpose count-consecutive-Bs))

  (define sum-pairs
    (flatten
     (build-pairs count-consecutive-Bs-t
                  [\u03BB (a b r) (cons (+ a b) r)])))

  (for/or ((p sum-pairs))
    (not (= 2 p)))

  )

```