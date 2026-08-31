# Racket solution and proof

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2184173/](https://leetcode.com/problems/longest-binary-subsequence-less-than-or-equal-to-k/solutions/2184173/)

---

Let's say the corresponding index array of the result subsequence is

```
i_0, i_1, ..., i_m
```

What's the property of the index array?

1. Given two binary string with same length, If `a <= b`, we say `a` is a better solution.
    We always prefer a better solution though it is not required by the problem.
2. There is no `0` before index `i_0`, obviously.
	If there is, we can add it into the result.
3. The result subsequence contains all `0`s.
	If any `0` with index `j` that not in the result subsequence, we can add it into the result,
	and remove `i_0` from the result to construct a better solution.
4. If `i_j` is `1`, all `1`s after it are in the result.
	If any `1` after `i_j` is not in the result, we can add it into the result, and remove `i_j` to construct a better solution.

That means, there is a special `1` with index `i`, all characters after it are included in the result,
all `0`s before it is in the result.
In case there is no `1` in the result, all `0`s included.
We construct the result subsequence gready.

```scheme
(define/contract (longest-subsequence s k)
  (-> string? exact-integer? exact-integer?)

  (let ([lst (map (lambda (x)
                    (- (char->integer x)
                       (char->integer #\\0)))
                  (string->list s))]
        [ret 0]
        [binary 0])
    (for ([v (reverse lst)]
          [i #e1e10])
      (let ([new_binary (+ binary (* v (expt 2 i)))])
        (when (<= new_binary k)
          (set! binary new_binary)
          (set! ret (add1 ret)))))
    ret))
```