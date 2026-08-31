# Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2207430/](https://leetcode.com/problems/number-of-distinct-roll-sequences/solutions/2207430/)

---

`dp[i][j][k]` means the number of sequences that have length `i+1` and ends with `[k, j]`.
`dp2[i][j]` means the number of sequences that have length `i+1` and ends with `[j]`.
Specially, `dp2[i][j] = dp[i][j][1] + ... + dp[i][j][6]`.

```scheme
(define/contract (distinct-sequences n)
  (-> exact-integer? exact-integer?)

  (define (make-array . dims)
    (if (= (length dims) 1) (first dims)
        (build-vector (car dims) (lambda _ (apply make-array (cdr dims))))))

  (define (aref arr . dims)
    (if (= (length dims) 0) arr
        (apply aref (vector-ref arr (car dims)) (cdr dims))))

  (define (aset! arr . dims)
    (if (= (length dims) 2) (vector-set! arr (first dims) (second dims))
        (apply aset! (vector-ref arr (car dims)) (cdr dims))))
  
  (define (mod x) (modulo x (+ #e1e9 7)))
  (define (sum vec) (mod (foldl + 0 (vector->list vec))))

  (let ([dp (make-array n 7 7 0)]
        [dp2 (make-array n 7 0)])
    (for ([j (range 1 7)])
      (aset! dp2 0 j 1))
    (for* ([i (range 1 n)]
           [j (range 1 7)])
      (for ([k (range 1 7)])
        (when (and (= 1 (gcd j k)) (not (= j k)))
            (aset! dp i j k
                   (- (aref dp2 (sub1 i) k)
                      (aref dp (sub1 i) k j)))))
      (aset! dp2 i j (sum (aref dp i j))))
    (sum (aref dp2 (sub1 n)))))
```