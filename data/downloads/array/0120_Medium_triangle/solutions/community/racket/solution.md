# Solve triangle using Racket

**Author:** jaeyeon-jo-kr
**Votes:** 0
**Link:** [https://leetcode.com/problems/triangle/solutions/4541197/](https://leetcode.com/problems/triangle/solutions/4541197/)

---

# Code
```
(define max-o 1000)

(define (cur-dp cur dp-prev)
  (map (lambda (c p1 p2) (+ c (min p1 p2)))
       cur (cons max-o dp-prev) (append dp-prev (list max-o))))

(define/contract (minimum-total triangle)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (let loop ([tri triangle] [dp '()])
    (match* (tri dp) 
      [((list x xs ...) '()) (loop xs (cons x dp))]
      [((list) dp) (apply min (first dp))]
      [((list (list cur ...) next ...) (list dp-prev _ ...))
       (loop next (cons (cur-dp cur dp-prev) dp))])))
```