# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223633/](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-in-binary-representation-to-one/solutions/5223633/)

---

# Code
```racket
(define/contract (num-steps s)
  (-> string? exact-integer?)
  (let ([lst (for/fold ([lst empty])([c s]) (cons c lst))])
    (let recur ([lst lst][ans 0][count 0])
        (cond 
            [(empty? lst) (if (not (= count 1)) (+ (add1 count) ans) ans)]
            [(char=? (first lst) #\\1) (recur (rest lst) ans (add1 count))]
            [(and (char=? (first lst) #\\0) (zero? count)) (recur (rest lst) (add1 ans) count)]
            [else (recur (rest lst) (+ (add1 count) ans) 1)]))))
```