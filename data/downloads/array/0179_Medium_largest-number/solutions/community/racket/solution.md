# Racket simple sort key

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number/solutions/5810246/](https://leetcode.com/problems/largest-number/solutions/5810246/)

---

# Intuition
Needed to know some theory to figure this out.

# Code
```racket []
(define (sort-nums a b)
  (let ([s1 (format "~a" a)]
        [s2 (format "~a" b)])
    (< (string->number (string-append s2 s1))
       (string->number (string-append s1 s2)))))

(define (largest-number nums)
  (apply (compose ~a string->number ~a) (sort nums sort-nums)))
```