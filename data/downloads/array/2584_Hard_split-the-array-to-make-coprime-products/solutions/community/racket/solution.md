# Intuitive Racket Solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3272004/](https://leetcode.com/problems/split-the-array-to-make-coprime-products/solutions/3272004/)

---

# Intuition

After some thinking, the `gcd` solution is not feasible as
it would become too large to fit into a 64-bit integer.

We factor the numbers in `nums`, maintain the frequencies hash
table of the left `i+1` numbers, the right `n-i-1` numbers, and
their intersects, respectively.

# Complexity
- Time complexity: $O(\\sqrt{m} + n \\lg m)$

- Space complexity: $O(n \\lg m)$

where $m = \\sqrt{\\max(\	ext{nums})}$

# Code

In code, I hardcoded `1001` beacause `sqrt(max(nums)) < 1001`.

```
(define (find-valid-split nums)
  (define intersects (make-hash))
  (define right (make-hash))
  (define left (make-hash))

  (define (remove! prime-freq primes)
    (for ([(p cnt) primes])
      (hash-update! prime-freq p (\u03BB (old) (- old cnt)))
      (when (= 0 (hash-ref prime-freq p))
        (hash-remove! prime-freq p))))

  (define (add! prime-freq primes)
    (for ([(p cnt) primes])
      (hash-update! prime-freq p (\u03BB (old) (+ old cnt)) 0)))

  (define (update-intersects! primes)
    (for ([(p cnt) primes])
      (define s (min (hash-ref left p 0)
                     (hash-ref right p 0)))
      (cond [(= s 0) (hash-remove! intersects p)]
            [else (hash-set! intersects p s)])))

  (define all-primes
    (let ([ps (mutable-set)])
      (for ([i (range 2 1001)])
        (when (for/and ([p ps])
                (not (= 0 (modulo i p))))
          (set-add! ps i)))
      ps))

  (define (factor x)
    (define h (make-hash))
    (for ([p all-primes])
      (let loop ()
        (when (= 0 (modulo x p))
          (set! x (/ x p))
          (hash-update! h p add1 0)
          (loop))))
    (when (not (= x 1))
      (hash-set! h x 1))
    h)

  (define primes (map factor nums))

  (define ans -1)

  (for ([ps primes])
    (add! right ps))

  (for ([ps (drop-right primes 1)]
        [i (in-naturals 0)])
    (remove! right ps)
    (add! left ps)
    (update-intersects! ps)
    (when (and (= 0 (hash-count intersects))
               (= ans -1))
      (set! ans i)))
  ans)

```