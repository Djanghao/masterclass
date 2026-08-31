# racket 220ms -- create data structure w/ message-passing to work with bit positions

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6031676/](https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii/solutions/6031676/)

---

# Code
```racket []
(define (bit-ops [bits (make-vector 32 0)])
  "Data structure for working with bit positions."
  (lambda (x [y #f])
    (case x
      ((1 -1) (for ([i (integer-length y)])
                (when (bitwise-bit-set? y i)
                  (let ([idx (- 31 i)])
                    (vector-set! bits idx
                                 (+ x (vector-ref bits idx)))))))
      ('num (for/sum ([i 32])
              (if (>= (vector-ref bits (- 31 i)) 1) (expt 2 i) 0))))))

(define (minimum-subarray-length nums k)
  (let* ([nums (list->vector nums)]
         [bits (bit-ops)]
         [min-length (add1 (vector-length nums))])
    (bits 1 (vector-ref nums 0))  ;; add first value in nums
    (let loop ([l 0] [r 0])
      (if (>= (bits 'num) k)
          (begin
            (set! min-length (min min-length (add1 (- r l))))
            (when (> r l)
              (bits -1 (vector-ref nums l)) ;; remove bits of left value
              (loop (add1 l) r )))
          (when (< r (sub1 (vector-length nums)))
            (bits 1 (vector-ref nums (add1 r)))  ;; add bits of new right value
            (loop l (add1 r) ))))
    
    (if (<= min-length (vector-length nums)) min-length -1)))
```