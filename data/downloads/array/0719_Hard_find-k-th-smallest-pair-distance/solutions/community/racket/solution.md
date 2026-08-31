# Binary search with Racket

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5633464/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/5633464/)

---

```racket
(define (count-distances< nums k)
    (define n (vector-length nums))
    (if (>= 0 k) 0 (let loop ([i 0] [j 0] [answer 0])
        (cond
            [(and (> n j) (> k (- (vector-ref nums j) (vector-ref nums i))))
                (loop i (add1 j) answer)]
            [(> n i) (loop (add1 i) j (+ answer (- (sub1 j) i)))]
            [else answer]))))

(define (smallest-distance-pair nums k)
    (let ([nums (list->vector nums)])
        (vector-sort! nums <)
        (define n (vector-length nums))
        (let binary-search (
            [low 0]
            [high (add1 (- (vector-ref nums (sub1 n)) (vector-ref nums 0)))])
            (if (>= 1 (- high low)) low (let
                ([mid (quotient (+ low high) 2)])
                (if (> k (count-distances< nums mid))
                    (binary-search mid high)
                    (binary-search low mid)))))))
```