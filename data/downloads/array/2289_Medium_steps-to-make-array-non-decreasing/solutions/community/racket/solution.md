# racket solution and explanation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2088551/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/2088551/)

---

Let `a[i]` be the `i`-th element of the input array, `d[i]` be the life of the `i`-th element of the array.

If `a[i]` will be removed at `k`-th step, its life is `k`.
For a given element that would not be removed, it's life is infinity.
Then the output is the maximum value of the array `d` except infinity values.

How to calculate `d[i]`?

If `a[i]` is removed at `k`-th step, its previous element is `a[j]` at that time. Then we have

```
d[j] > max(d[j+1], ... , d[i-1]) and
a[j] > a[i]
```

Note the first equation implies monotonic stack usage.
We just search the `j` that (`a[j] > a[i]`) in the stack when we pop elements.

After finding `j`, `d[i] = max(d[j+1], ..., d[i-1]) + 1`.

**Racket code**

In the following code, I use 0 instead of infinity value for shorter code.

```scheme
(define/contract (total-steps nums)
  (-> (listof exact-integer?) exact-integer?)

  (let ([stk '()])
    (for/fold ([ma 0])
              ([v nums])
      (let*-values ([[del rem] (splitf-at stk (lambda (x) (<= (car x) v)))]
                    [[del-t] (if (null? rem) 0
                                 (add1 (apply max 0 (map cdr del))))])
        (set! stk (cons (cons v del-t) rem))
        (max ma del-t)))))
```