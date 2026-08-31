# Functional solution

**Author:** tifv
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-ii/solutions/5630789/](https://leetcode.com/problems/combination-sum-ii/solutions/5630789/)

---

Sort `candidates` in non-increasing order.
Run a recursive function. If `target` is zero, the answer is empty list. Otherwise
1.\xA0take the largest number `x` from `candidates` and recursively continue with the rest of the `candidates` and `target := target - x` (conditional on the new `target` being nonnegative),
2.\xA0instead skip the largest number from `candidates` and all numbers equal to it, and recursively continue with the rest of the `candidates`.

```racket
(define (combination-sum2 candidates target)
    (let combs ([candidates (sort candidates >)] [target target] [tail null] [answer null])
        (match* (candidates target)
            [(_ 0) (cons tail answer)]
            [((cons c candidates) _)
                (define answer+ (if (< target c) answer
                    (combs candidates (- target c) (cons c tail) answer)))
                (combs (dropf candidates (curry = c)) target tail answer+)]
            [(_ _) answer])))
```