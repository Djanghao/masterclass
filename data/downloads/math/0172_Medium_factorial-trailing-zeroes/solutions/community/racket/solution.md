# Racket with coercion

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4208674/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/4208674/)

---

# Approach 

The first one calculates factorial n as gamma(n+1). Then we coerce to a string, coerce the string to a list of chars, and take characters from the end of the list while they are 0. The length of the taken 0s is the answer

The second answer is much quicker -- I took it from the solutions. Not sure of how it was derived

# Code

```scheme
;; original
(require (only-in math/special-functions gamma))

(define (trailing-zeroes n)
  (let ([fct (gamma (add1 n))])
    (length (takef-right (string->list (number->string fct)) (curry eq? #\\0)))))


;; trick found in the comments. Very fast!
(define (trailing-zeroes n)
  (let loop ([n n]
             [ans 0])
    (let ([n5 (quotient n 5)])
          (if (>= n5 1)
              (loop n5 (+ ans n5))
              ans))))

```