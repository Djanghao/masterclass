# 42ms racket

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5976117/](https://leetcode.com/problems/count-square-submatrices-with-all-ones/solutions/5976117/)

---

# Intuition
For each square in the grid, run a function that assumes that square is the top left corner of a new grid. Every time it is possible to grow the subgrid with a new row of all ones and a new col of all ones, increment the tally.

# Code
```racket []
(define (count-squares G)
  (let* ([G (for/vector ([x G]) (list->vector x))])
    (for*/sum ([r (vector-length G)]
               [c (vector-length (vector-ref G 0))])
      (top-left G r c))))

(define (vget G r c) (vector-ref (vector-ref G r) c))

(define (top-left G r c)
  (let ([mx (min (- (vector-length G) r)
                 (- (vector-length (vector-ref G 0)) c))])
    (for/sum ([i mx]
              #:break (or (not (check-row-1s G (+ r i) c (add1 i)))
                           (not (check-col-1s G r (+ c i) (add1 i)))))
      1)))

(define (check-row-1s G r c x)
  (for/and ([nc (in-range c (min (vector-length (vector-ref G 0))
                                 (+ c x)))])
    (> (vget G r nc) 0)))

(define (check-col-1s G r c x)
  (for/and ([nr (in-range r (min (vector-length G)
                                 (+ r x)))])
    (> (vget G nr c) 0)))

```