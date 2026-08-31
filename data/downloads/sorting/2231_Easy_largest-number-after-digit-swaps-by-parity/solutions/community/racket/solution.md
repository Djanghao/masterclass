# Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1933088/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/1933088/)

---

The code should be self explained.

```scheme
(define/contract (largest-integer num)
  (-> exact-integer? exact-integer?)
  (let* ([lst (number->list num)]
         [sorted (sort lst >)])
    (let loop ([lst lst]
               [result 0]
               [odds (filter odd? sorted)]
               [evens (filter even? sorted)])
      (cond [(null? lst) result]
            [(odd? (car lst))
             (loop (cdr lst)
                   (+ (* result 10) (car odds))
                   (cdr odds)
                   evens)]
            [(even? (car lst))
             (loop (cdr lst)
                   (+ (* result 10) (car evens))
                   odds
                   (cdr evens))]))))

(define (number->list n)
  (let loop ([n n] 
             [lst null])
    (if (< n 10) (cons n lst)
      (loop (quotient n 10) 
            (cons (remainder n 10) lst)))))
```