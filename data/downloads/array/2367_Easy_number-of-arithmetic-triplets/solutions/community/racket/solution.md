# A Racket noob's solution

**Author:** semyonf
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5748183/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5748183/)

---

# Code
```racket []
(define (arithmetic-triplets nums diff)
  (define (find nums x is-final)
    (cond 
      [(empty? nums) 0]
      [(= x (first nums)) (if is-final 1 (find (rest nums) (+ diff x) #t))]
      [(not (empty? (rest nums))) (find (rest nums) x is-final)]
      [else 0]))

  (define (count-triplets nums triplets-found)
    (cond
      [(empty? nums) triplets-found]
      [else (let ([n (first nums)])
        (count-triplets (rest nums)
                        (+ triplets-found
                           (find nums (+ diff n) #f))))]))

  (count-triplets nums 0))
```