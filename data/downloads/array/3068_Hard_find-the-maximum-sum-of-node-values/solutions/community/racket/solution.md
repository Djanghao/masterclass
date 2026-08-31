# Racket Solution

**Author:** nerasnow
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5181244/](https://leetcode.com/problems/find-the-maximum-sum-of-node-values/solutions/5181244/)

---

# Code
```racket
(define (vector-sum vec count)
    (for/sum ([i vec][j (in-range count)]) i))

(define/contract (maximum-value-sum nums k edges)
  (-> (listof exact-integer?) exact-integer? (listof (listof exact-integer?)) exact-integer?)
    (define change (vector-sort (list->vector (map (\u03BB (i) (- (bitwise-xor k i) i)) nums)) >))
    (define count (for/sum ([i change] #:when (positive? i)) 1))
    (define s (+ (apply + nums) (vector-sum change count)))
    (cond
        [(even? count) s]
        [(odd? count)
            (let ([tmp (- s (vector-ref change (sub1 count)))]) 
            (if (< (add1 count) (vector-length change)) 
                (max tmp (+ s (vector-ref change count))) 
                tmp))]))
```