# racket sort + min-heap

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/4100700/](https://leetcode.com/problems/maximum-subsequence-score/solutions/4100700/)

---

# Approach

Flail about a bit, then looked up the neetcode video and implemented his pythonic approach in racket

# Code
```
(define (max-score nums1 nums2 k)
  (define-values (pairs hp n1-sum)
    (values (sort (map cons nums1 nums2) #:key cdr >) (make-heap <) 0))
  (for/fold ([results 0])
            ([pair pairs])
    (let ([min-val (cdr pair)]
          [n1 (car pair)])
      (heap-add! hp n1)
      (set! n1-sum (+ n1-sum n1))
      (when (> (heap-count hp) k)
        (let ([n1-min (heap-min hp)])
          (heap-remove-min! hp)
          (set! n1-sum (- n1-sum n1-min))))
      (if (= (heap-count hp) k)
          (values (max results (* n1-sum min-val)))
          (values results)))))
```