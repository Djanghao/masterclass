# Racket DP solution

**Author:** 6cdh
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1888020/](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles/solutions/1888020/)

---

```scheme
(define/contract (max-value-of-coins piles k)
  (-> (listof (listof exact-integer?)) exact-integer? exact-integer?)
  (define (dp i k)
    (cond [(= i (vector-length piles)) 0]
          [(= k 0) 0]
          [else (let ([maximum (dp (+ i 1) k)]
                      [prefix 0])
                  (for ([j (range 0 (min (vector-length (vector-ref piles i))
                                         k))]
                        [vij (vector-ref piles i)])
                    (set-var! prefix + vij)
                    (set-var! maximum max (+ prefix (dp (+ i 1) (- k j 1)))))
                  maximum)]))
  (set! piles (list2d->vector2d piles))
  (set! dp (vector-memoize dp (vector-length piles) k -1))
  (dp 0 k))

;; helpers ;;

(define (list2d->vector2d ll)
  (list->vector (map list->vector ll)))

(define (vector2d-ref vec x y)
  (vector-ref (vector-ref vec x) y))

(define (vector2d-set! vec x y val)
  (vector-set! (vector-ref vec x) y val))

(define (make-vector2d x y init)
  (build-vector x (lambda (row) (make-vector y init))))

(define (vector-memoize old-proc xlimit ylimit init)
  (let ([vec (make-vector2d (+ xlimit 1) (+ ylimit 1) init)])
    (lambda (x y)
      (when (= (vector2d-ref vec x y) init)
            (vector2d-set! vec x y (old-proc x y)))
      (vector2d-ref vec x y))))

(define-syntax-rule (set-var! x f delta)
  (set! x (f x delta)))
```