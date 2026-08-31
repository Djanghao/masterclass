# racket 105ms using hash-count to verify window

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6063660/](https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/solutions/6063660/)

---

# Code
```racket []
(define (maximum-subarray-sum nums k)
  (let* ([nums (list->vector nums)]
         [ans 0]
         [c (let ([d (make-hash)])
              (for ([i k])
                (let ([val (vector-ref nums i)])
                  (set! ans (+ ans val))
                  (hash-set! d val (add1 (hash-ref d val 0)))))
              d)]
         [valid? (lambda () (= k (hash-count c)))])
    (let loop ([l 0] [r (sub1 k)] [sum ans] [best 0])
      (if (= r (sub1 (vector-length nums)))
          (if (valid?)
              (max sum best)
              best)
          (let ([lval (vector-ref nums l)]
                [newrval (vector-ref nums (add1 r))])
            (when (valid?)
              (set! best (max best sum)))
            (hash-set! c lval (sub1 (hash-ref c lval)))
            (hash-set! c newrval (add1 (hash-ref c newrval 0)))
            (when (zero? (hash-ref c lval))
              (hash-remove! c lval))
            (loop (add1 l) (add1 r) (- (+ sum newrval) lval) best))))))
```