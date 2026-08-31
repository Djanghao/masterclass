# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313714/](https://leetcode.com/problems/count-nice-pairs-in-an-array/solutions/4313714/)

---

The approach is very similar to the canonical approach.

# Code
```
(define/contract (rev x)
  (-> nonnegative-integer? nonnegative-integer?)
    (rev-helper 0 x)
)

(define/contract (rev-helper acc x)
 (-> nonnegative-integer? nonnegative-integer? nonnegative-integer?)
 (cond
    [(= x 0) acc]
    [else (let-values ([(q r) (quotient/remainder x 10)])
          (rev-helper (+ (* 10 acc) r) q))]
 )
)

(define/contract (count-nice-pairs nums)
  (-> (listof exact-integer?) exact-integer?)
  (define diff-lst (map (lambda (num) (- (rev num) num)) nums))

  (define h (make-hash (map (lambda (num) (cons num 0)) diff-lst)))

  (for ([i diff-lst])
    (hash-update! h i add1)
  )

  (foldl (lambda (num acc) 
  (remainder (+ (remainder (quotient (* num (sub1 num)) 2) 1000000007) acc) 1000000007)) 
  0 (hash-values h))
)
```