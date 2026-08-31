# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195294/](https://leetcode.com/problems/the-number-of-beautiful-subsets/solutions/5195294/)

---

# Code
```racket
(define/contract (beautiful-subsets nums k)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (let ([forbidden (make-vector 1001)])
    (sub1 (let dfs ([nums nums])
        (if (empty? nums) 1 
            (let ([f (first nums)])
            (+ (dfs (rest nums))
                (if (zero? (vector-ref forbidden f))    
                    (begin
                        (if (>= (- f k) 1) (vector-set! forbidden (- f k) (add1 (vector-ref forbidden (- f k)))) void)
                        (if (<= (+ f k) 1000) (vector-set! forbidden (+ f k) (add1 (vector-ref forbidden (+ f k)))) void)
                        (let ([tmp (dfs (rest nums))])
                        (if (>= (- f k) 1) (vector-set! forbidden (- f k) (sub1 (vector-ref forbidden (- f k)))) void)
                        (if (<= (+ f k) 1000) (vector-set! forbidden (+ f k) (sub1 (vector-ref forbidden (+ f k)))) void)
                        tmp)
                    ) 0))))))))
```