# Simple O(n) merge operation solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3974968/](https://leetcode.com/problems/minimum-operations-to-form-subsequence-with-target-sum/solutions/3974968/)

---

# Intuition

Let's assume we have a solution array: $[c_0, c_1, ..., c_k]$ means 
we used $c_0 \	imes 2^0$, $c_1 \	imes 2^1, \\cdots, c_k\	imes 2^k$ to sum to `target`.

Where the used power of 2 can either exists in the input array or be obtained by splitting a larger power of 2.

Now, we define a **merge operation** without cost:

* for two used numbers $2^i$, merge them to obtain a larger used number $2^{i+1}$

After we do as many merge operations as we can, we finally get a new solution array that only consists of 0 and 1.

This solution array also is the binary representation of `target`.

# Approach

We traverse power of 2: `1, 2, 4, ...` in ascending order. For each number `p`, it could be used 0 or 1 times.

At each step, `target` is always multiple of `p`: `target = k * p` where k is a integer. Then we have four cases:

1. k is even, the number of `p` is even. We merge all `p`s to `2p`s.
2. k is odd, the number of `p` is odd. We subtract a `p` from `target`, then merge the remain `p`s to `2p`s.
3. k is even, the number of `p` is odd. we merge all `p` except the last one. For the last `p`, it's either unused or used with another `p` that is splitted from a `2p`. But if we have a `2p`, why we need to split it instead of directly use it? So the last `p` should be always unused.
4. k is odd, the number of `p` is even. If the number of `p` is zero, we borrow a `p` from `2p`, increase the counter of the number of the split by 1, and subtract a `p` from `target`. If it's not zero, we pick two `p`s, one for subtract from `target`, one for unused. The remain `p`s will be merged.

In this way, we can traverse once and never backtrack.

# Complexity

- Time complexity: $O(n)$
- Space complexity: $O(1)$

Upvote if you like it.

# Code

Pseudocode

```python
def min_operations(nums: list[int], target: int):
    counter = Counter(nums)
    used = 0
    ans = 0

    for i in range(0, 31):
        if has_i_th_bit_set(target, i):
            used = (used + counter[2^i] - 1) // 2
        else:
            used = (used + counter[2^i]) // 2
        if used < 0:
            ans -= used
    if used >= 0:
        ans
    else:
        -1
```

Racket code

```racket
(define (min-operations nums target)
  (define counter (sequence->counter nums))

  (define (div2 x)
    (exact-floor (/ x 2)))

  (define (count-2^i i)
    (hash-ref counter (expt 2 i) 0))

  (define used 0)
  (define ans 0)
  (for ([i (in-range 0 31)])
    (set! used (cond [(bitwise-bit-set? target i)
                      (div2 (sub1 (+ used (count-2^i i))))]
                     [else
                      (div2 (+ used (count-2^i i)))]))
    (set! ans (if (negative? used)
                  (- ans used)
                  ans)))

  (if (nonnegative-integer? used) ans -1))

(define (sequence->counter seq)
  (for/fold ([h (hash)])
            ([v seq])
    (hash-update h v add1 0)))
```