# Racket Solutions

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/powx-n/solutions/4453067/](https://leetcode.com/problems/powx-n/solutions/4453067/)

---


# Code
```racket
(define/contract (my-pow x n)
  (-> flonum? exact-integer? number?)
  (cond 
    [(negative? n) (/ 1 (my-pow x (- n)))]
    [(zero? n) 1]
    [(= n 1) x]
    [(zero? (remainder n 2)) (let ([h (my-pow x (quotient n 2))]) (* h h) )]
    [else (let ([h (my-pow x (quotient n 2))]) (* h h x))]
  )
  )
```
Don't forget the built-in function:
```racket
(define/contract (my-pow x n)
  (-> flonum? exact-integer? number?)
  (expt x n)
  )
```