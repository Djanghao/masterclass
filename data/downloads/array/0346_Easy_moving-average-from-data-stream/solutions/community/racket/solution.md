# racket ezpz

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-average-from-data-stream/solutions/4587448/](https://leetcode.com/problems/moving-average-from-data-stream/solutions/4587448/)

---

# Code

```scheme
(define moving-average%
  (class object%
    (super-new)

    ; size : exact-integer?
    (init-field
     size
     [vals '()]
     [curr-size 1])

    ; next : exact-integer? -> flonum?
    (define/public (next val)
      (set! vals (cons val vals))
      (if (not (equal? size curr-size))
          (begin
            (set! curr-size (add1 curr-size))
            (/ (apply + (take vals (sub1 curr-size))) (sub1 curr-size)))
          (/ (apply + (take vals size)) size)))))
```