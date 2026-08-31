# Racket solution (Also, why is the input a string?)

**Author:** russells-crockpot
**Votes:** 0
**Link:** [https://leetcode.com/problems/strobogrammatic-number/solutions/1344975/](https://leetcode.com/problems/strobogrammatic-number/solutions/1344975/)

---

I'm new to racket, so it may not be very good:

```racket
(define (integer->list num)
  (if [= num 0]
    '()
    (let ([mod (modulo num 10)]
       [n (quotient num 10)])
      (cons mod (integer->list n))
)))

(define (strobogrammatic? num)
  (cond
    [(not (list? num)) (strobogrammatic? (integer->list num))]
    [(empty? num) #t]
    [(and (= (length num) 1) (= (car num) 1)) #t]
    [(and (= (length num) 1) (= (car num) 8)) #t]
    [(and (= (length num) 1) (= (car num) 0)) #t]
    [(= (length num) 1) #f]
    [(and (= (first num) 6) (= (last num) 9)) (strobogrammatic? (cdr (reverse (cdr num))))]
    [(and (= (first num) 9) (= (last num) 6)) (strobogrammatic? (cdr (reverse (cdr num))))]
    [(and (= (first num) 1) (= (last num) 1)) (strobogrammatic? (cdr (reverse (cdr num))))]
    [(and (= (first num) 8) (= (last num) 8)) (strobogrammatic? (cdr (reverse (cdr num))))]
    [(and (= (first num) 0) (= (last num) 0)) (strobogrammatic? (cdr (reverse (cdr num))))]
    [else #f]))

(define/contract (is-strobogrammatic num)
  (-> string? boolean?)
    (strobogrammatic? (string->number num))
  )```
