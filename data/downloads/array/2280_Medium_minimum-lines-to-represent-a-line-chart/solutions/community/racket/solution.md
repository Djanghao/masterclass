# Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062292/](https://leetcode.com/problems/minimum-lines-to-represent-a-line-chart/solutions/2062292/)

---

```scheme
(define/contract (minimum-lines stockPrices)
  (-> (listof (listof exact-integer?)) exact-integer?)

  (define (get-slope lastp p)
    (/ (- (cadr p) (cadr lastp))
       (- (car p) (car lastp))))

  (let ([prices (sort stockPrices < #:key car)]
        [cnt 0]
        [slope 0])
    (for ([p (cdr prices)]
          [lastp prices])
      (let ([new-slope (get-slope lastp p)])
        (when (or (= cnt 0)
                  (not (= new-slope slope)))
              (set! slope new-slope)
              (set! cnt (+ cnt 1)))))
    cnt))
```