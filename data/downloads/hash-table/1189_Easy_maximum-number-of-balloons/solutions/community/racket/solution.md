# Simple Racket solution using foldl

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-balloons/solutions/4519346/](https://leetcode.com/problems/maximum-number-of-balloons/solutions/4519346/)

---

# Intuition
The max number of balloons we can construct is bounded from above by 
`(quotient (hash-ref cts c) (hash-ref b-ct c))` 

# Code
```
(define (max-number-of-balloons text)
    (define (zip l1 l2)
        (map cons l1 l2))

    (define (ct-str s str)
    (foldl (lambda (c a) (cond 
                             [(hash-ref a c #f) (hash-update a c add1 0)]
                             [else a]))
            (make-immutable-hash (zip (string->list str) (make-list (string-length str) 0)))
            (string->list s)))

    (define b-ct (ct-str "balloon" "balloon"))
    (define cts (ct-str text "balloon"))
    (define m (argmin (lambda (c) (quotient (hash-ref cts c) (hash-ref b-ct c)))
                      (hash-keys b-ct)))
    (quotient (hash-ref cts m) (hash-ref b-ct m)))
```