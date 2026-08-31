# Racket (simple + binary search + math)

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/1934207/](https://leetcode.com/problems/arranging-coins/solutions/1934207/)

---

A completed step requires 1 + 2 + ... = k(k + 1)/2 coins. Therefore, we can just iterate until we find a value k such that k(k+1)/2 >= n

The first solution just loops through k to find such a value:

```
(define (calc-arithmetic n)
  (/ (* n (add1 n)) 2))

(define (arrange-coins n)
  (let rc ([k 0])
    (let ([calc (calc-arithmetic k)])
      (if (>= calc n)
          (if (= calc n)
              k
              (sub1 k))
          (rc (add1 k))))))
```

The second solution uses binary search

To start we want to take a bound on our search space. Since (calc n) = n(n+1)/2, we can safely take (n/2)+1 as an upper bound, and use 0 as a lower bound.

```
(define (calc-arithmetic n)
  (/ (* n (add1 n)) 2))

(define (search-for-k z)
  (define (ptr-narrow left right)
    (let* ([k (quotient (+ left right) 2)]
           [k-val (calc-arithmetic k)])
      (cond [(= k-val z) k]
            [(and (> k-val z) (> z (calc-arithmetic (sub1 k)))) (sub1 k)]
            [(> k-val z) (ptr-narrow left (sub1 k))]
            [else (ptr-narrow (add1 k) right)])))
  (ptr-narrow 0 (add1 (quotient z 2))))

(define (arrange-coins n)
  (search-for-k n))
```

Finally, with the mathematical derivation:

```
(define (arrange-coins n)
  (inexact->exact
   (floor (- (sqrt (+ (* 2 n) (/ 1 4)))
             (/ 1 2)))))
```