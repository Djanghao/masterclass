# Simple O(n) solution using pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/asteroid-collision/solutions/4512854/](https://leetcode.com/problems/asteroid-collision/solutions/4512854/)

---

# Code
```Racket
(define (asteroid-collision asteroids)
  (let loop ([l asteroids] [a '()])
    (match l
        ['() (reverse a)]
        [(cons x xs) #:when (empty? a) (loop xs (cons x a))]
        [(cons x xs) #:when (> x 0) (loop xs (cons x a))]
        [(cons x xs) #:when (= (sgn x) (sgn (car a))) (loop xs (cons x a))]
        [(cons x xs) #:when (and (> x 0) (< 0 (car a))) (loop xs (cons x a))]
        [(cons x xs) #:when (and (< x 0) (< (abs x) (car a))) (loop xs a)]
        [(cons x xs) #:when (and (< x 0) (= (abs x) (car a))) (loop xs (cdr a))]
        [(cons x xs) #:when (and (< x 0) (> (abs x) (car a))) (loop l (cdr a))])))
```