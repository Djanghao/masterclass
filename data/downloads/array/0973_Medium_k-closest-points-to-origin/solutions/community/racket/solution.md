# easy racket solution

**Author:** yaxley-peaks
**Votes:** 0
**Link:** [https://leetcode.com/problems/k-closest-points-to-origin/solutions/4223351/](https://leetcode.com/problems/k-closest-points-to-origin/solutions/4223351/)

---


# Code
```
(define/contract (k-closest points k)
  (-> (listof (listof exact-integer?)) exact-integer? (listof (listof exact-integer?)))
  (define (distance-from-origin x)
    (let ([a (car x)] [b (cadr x)]) (+ (* a a) (* b b))))
  (take (sort points < #:key distance-from-origin) k))

```