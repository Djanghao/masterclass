# racket ~500ms: binary search over solution space

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6045703/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/6045703/)

---

# Code
```racket []
(define (minimized-maximum n quant)
  (bsearch 0 (apply max quant) n quant))

(define (can-distribute n quant guess)
  (cond ((null? quant) #t)
        ((zero? n) #f)
        (else
         (let ([dist (- (car quant) guess)])
           (can-distribute (sub1 n)
                           (if (positive? dist)
                               (cons dist (cdr quant))
                               (cdr quant))
                           guess)))))

(define (bsearch left right n quant)
  (if (>= left right)
      left
      (let ([mid (floor (/ (+ left right) 2))])
        (if (not (can-distribute n quant mid))
            (bsearch (add1 mid) right n quant)
            (bsearch left mid n quant)))))
```