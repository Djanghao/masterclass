# Racket brute force

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199155/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199155/)

---

```scheme
(define/contract (maximums-spliced-array nums1 nums2)
  (-> (listof exact-integer?) (listof exact-integer?) exact-integer?)

  (define n (length nums1))

  (define (range-sum lst)
    (let ([vec (list->vector lst)]
          [prefix (make-vector (add1 n) 0)])
      (for ([i (range 1 (add1 n))])
        (vector-set! prefix i (+ (vector-ref prefix (sub1 i))
                                 (vector-ref vec (sub1 i)))))
      (lambda (i j) (- (vector-ref prefix j)
                       (vector-ref prefix i)))))

  (define (max-interval d)
    (let ([g-max-interval (cons 0 0)]
          [g-max 0]
          [min-before #e1e9]
          [min-i 0]
          [range-sumd (range-sum d)])
      (for ([i (add1 n)])
        (define v (range-sumd 0 i))
        (when (> (range-sumd min-i i) g-max)
          (set! g-max (range-sumd min-i i))
          (set! g-max-interval (cons min-i i)))
        (when (< v min-before)
          (set! min-before v)
          (set! min-i i)))
      (values (car g-max-interval)
              (cdr g-max-interval))))

  (define (replace-l1-with-l2 l1 l2)
    (define range-sum1 (range-sum l1))
    (define range-sum2 (range-sum l2))
    (define-values (i j) (max-interval (map - l2 l1)))
    (+ (range-sum1 0 i)
       (range-sum2 i j)
       (range-sum1 j n)))
  
  (max (replace-l1-with-l2 nums1 nums2)
       (replace-l1-with-l2 nums2 nums1)))
```