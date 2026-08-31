# Racket multicombination solution and explanation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2275241/](https://leetcode.com/problems/count-the-number-of-ideal-arrays/solutions/2275241/)

---

If you don't know multicombination, see [wikipedia](https://en.wikipedia.org/wiki/Combination).
Basically, it means pick `k` same elements and put them into `n` positions, and each position
can contain multiple elements. Its value is `mcomb(n,k) = binomial(n+k-1, k)`.

Back to our problem, assume the sequence is `y[0], y[1], ..., y[n-1]`.
Let's insert a dummy element `1` in front of the sequence, and get `y[0]=1, y[1], y[2], ..., y[n]`.
Let `c[i] = y[i] / y[i-1]`. Then we get

```
c[1] * c[2] * ... * c[n] = y[n]
```

where `1 <= c[i] <= y[n]`.
That means the number of all possible `c` is product of the multicombination of each prime factor of `y[n]`.

We can enumerate all `y[n]` (`1 <= y[n] <= maxValue`), and get its all prime factors and their multicombination.

**Example**

Let `y[n]=12`, its prime factors is `2, 2, 3`, `n=3`.

The array `c` may be (length of `c` is `n-1`)

```
// 2's multicombination
// mcomb(n, 2) = 6 times
1, 1
1, 2
2, 1
2, 2
(2*2), 1
1, (2*2)
// 3's multicombination
// mcomb(n,1) = 3 times
1, 1
1, 3
3, 1
```

that is `6 * 3 = 18` sequences. So the number of sequences that length 3 and ends with 12 are 18.

**Code**

```scheme
(define/contract (ideal-arrays n m)
  (-> exact-integer? exact-integer? exact-integer?)

  (define (mod x) (modulo x (+ #e1e9 7)))

  (define-syntax-rule (while cond body ...)
    (do () ((not cond))
      body ...))

  (define (factors x)
    (let ([m (make-hash)])
      (for ([j (range 2 (add1 (sqrt x)))])
        (while (= 0 (modulo x j))
          (set! x (/ x j))
          (hash-update! m j add1 0)))
      (when (> x 1)
        (hash-update! m x add1 0))
      m))

  (define (count-endwith x)
    (for/fold ([p 1])
              ([(_ fcnt) (factors x)])
      (mod (* p (binomial (+ n fcnt -1) fcnt)))))

  (for/fold ([ret 0])
            ([i (range 1 (add1 m))])
    (mod (+ ret (count-endwith i)))))
```

Time: `O(m * sqrt(m))`.