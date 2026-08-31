# O(nlogn) time, O(n) space solution using pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/car-fleet/solutions/4525198/](https://leetcode.com/problems/car-fleet/solutions/4525198/)

---

# Code
```Racket
(define (zip l1 l2)
    (map cons l1 l2))

(define (car-fleet target position speed)
  (define times (map (lambda (x) (/ (- target (car x)) (cdr x))) 
                     (sort (zip position speed) (lambda (x y) (> (car x) (car y))))))
  (let loop ([l times] [a '()])
    (match* (l a)
        [('() _) (length a)]
        [((cons x xs) '()) (loop xs (cons x a))]
        [((cons x xs) (cons t ts)) #:when (> x t) (loop xs (cons x a))]
        [((cons x xs) (cons t ts)) #:when (<= x t) (loop xs a)])))
```