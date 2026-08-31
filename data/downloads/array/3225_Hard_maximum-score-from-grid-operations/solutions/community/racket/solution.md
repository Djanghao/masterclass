# Simple Top Down Solution and Explanation

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5521016/](https://leetcode.com/problems/maximum-score-from-grid-operations/solutions/5521016/)

---

# Intuition

Write a top down dp then try to do some transformation to reduce the argument of the recursive function and make it has smaller time complexity.

# Approach

First, write a $O(n^4)$ top down dp solution which looks like this in pseudocode:

```python
# `col` is the column index
# `cur` is the number of black cells of current column
# `next` is the number of black cells of next column
# `dp` is the total score that from `0`-th column to `col`-th column (included).
def dp(col: int, cur: int, next: int) -> int:
    if col == 0:
        return col_score(col, cur, next)
    else:
        max_score = 0
        # `prev` is the number of black cells of previous column
        for prev in range(0, n + 1):
            cur_col_score = col_score(col, cur, max(prev, next))
            cur_score = cur_col_score + dp(col - 1, prev, cur)
            max_score = max(max_score, cur_score)
        return max_score

# the score of `col`-th column
def col_score(col, cur, max_prev_next):
    if col >= max_prev_next:
        return 0
    else:
        return col_sum(col, max_prev_next - 1) - col_sum(col, cur - 1)

# grid[0][col] + ... + grid[row][col]
def col_sum(col, row):
    if row == -1:
        return 0
    else:
        return grid[row][col] + col_sum(col, row - 1)
```

The time complexity is $O(n^4)$ by cache function `col_sum` and `dp`.

Then move the loop logic from `dp` to a new function `dp2`.

```python
def dp2(col, cur, next):
    max_score = 0
    # `prev` is the number of black cells of previous column
    for prev in range(0, n + 1):
        cur_col_score = col_score(col, cur, max(prev, next))
        cur_score = cur_col_score + dp(col - 1, prev, cur)
        max_score = max(max_score, cur_score)
    return max_score
```

and current `dp`:

```python
def dp(col, cur, next) -> int:
    if col == 0:
        return col_score(col, cur, next)
    else:
        return dp2(col, cur, next)
```

Then we rewrite `dp2` to remove the argument `next`.

**the tricky part**

First, we expand the `max` function in `dp2`:

```python
should_prev_greater_than_next = prev > next
for prev in range(0, n + 1):
    cur_col_score = 0
    if should_prev_greater_than_next:
        cur_col_score = col_score(col, cur, prev)
    else:
        cur_col_score = col_score(col, cur, next)
    ...
```

Then we move `should_prev_greater_than_next` into the argument list to replace `next`, this operation would improve the time complexity from $O(n^4)$ to $O(n^3)$.

```python
# We call `should_prev_greater_than_next` an assumption.
def dp2(col, cur, should_prev_greater_than_next: bool):
    max_score = 0
    # Note here we don't limit `prev` according to `next`,
    # the reason is stated later.
    for prev in range(0, n + 1):
        cur_col_score = 0
        if should_prev_greater_than_next:
            cur_col_score = col_score(col, cur, prev)
        # Note here we moved this code to function `dp`:

        # if not should_prev_greater_than_next:
        #     cur_col_score = col_score(col, cur, next)

        # `col_score(col, cur, next)` is nonnegative.
        # So our code would give smaller result than
        # the correct code when`should_prev_greater_than_next`
        # is true and `prev <= next`, that is, our assumption
        # is false. And it gives correct result when our
        # assumption is true.
        cur_score = cur_col_score + dp(col - 1, prev, cur)
        max_score = max(max_score, cur_score)
    return max_score
```

We try two cases (`should_prev_greater_than_next` is either true or false) in function `dp` and find the maximum.

```python
def dp(col, cur, next) -> int:
    if col == 0:
        return col_score(col, cur, next)
    else:
        # Here we try two cases. For each case,
        # `dp2` returns correct answer when our
        # assumption is correct, and a smaller
        # answer than the correct answer when
        # our assumption is incorrect.
        # By try two cases, we covers all the correct cases
        # and avoid wrong answers through `max` operation.

        # prev > next
        ans1 = dp2(col, cur, True)
        # prev <= next
        ans2 = col_score(col, cur, next) + dp2(col, cur, False)
        return max(ans1, ans2)
```

Then we cache `dp2` and obtain a $O(n^3)$ solution.

# Complexity
- Time complexity: $O(n^3)$
- Space complexity: $O(n^3)$

# Code

I used Python as pseudocode. But a fast functional language is required to pass with this top down solution. Here I used Racket.

```scheme
(define (maximum-score grid)
  (set! grid (list2d->vector2d grid))
  (define n (vector-length grid))

  (define (colsum j i)
    (if (= i -1)
        0
        (+ (aref grid i j) (colsum j (sub1 i)))))

  (cachef-vec! colsum n n -1)

  (define (cost1 col cur max-side)
    (if (>= cur max-side)
        0
        (- (colsum col (sub1 max-side))
           (colsum col (sub1 cur)))))

  (define (rec col cur next)
    (if (= col 0)
        (cost1 col cur next)
        (max (rec-prev col cur 1)
             (+ (cost1 col cur next) (rec-prev col cur 0)))))

  (define (rec-prev col cur prev>next?)
    (for/max 0 ([prev (add1 n)])
      (+ (if (= 1 prev>next?) (cost1 col cur prev) 0)
         (rec (sub1 col) prev cur))))

  (cachef-vec! rec-prev n (add1 n) 2 -1)

  (for/max 0 ([cur (add1 n)])
    (rec (sub1 n) cur 0))
  )

;; copied library

(require syntax/parse/define)

(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (build-vector n (\u03BB _ init))]
    [(_ n args ...)
     (build-vector n (\u03BB _ (make-array args ...)))]))

(define-syntax aref
  (syntax-rules ()
    [(_ arr) arr]
    [(_ arr i dims ...)
     (aref (vector-ref arr i) dims ...)]))

(define-syntax aset!
  (syntax-rules ()
    [(_ arr dim new-val)
     (vector-set! arr dim new-val)]
    [(_ arr dim1 dims ... new-val)
     (aset! (vector-ref arr dim1) dims ... new-val)]))

(define (list2d->vector2d lst)
  (list->vector (map list->vector lst)))

(define-syntax-parse-rule (cachef-vec! fn:id hints:expr ... init)
  (set! fn (cachef-vec fn hints ... init)))

(define-syntax-parser cachef-vec
  [(_ fn:id hints:expr ... init)
   (with-syntax ([(args ...) (generate-temporaries #'(hints ...))])
     #'(let* ([cache (make-array hints ... init)]
              [ori-fn fn])
         (lambda (args ...)
           (cond [(or (< args 0) ...
                      (>= args hints) ...)
                  (ori-fn args ...)]
                 [else
                  (when (equal? init (aref cache args ...))
                    (aset! cache args ... (ori-fn args ...)))
                  (aref cache args ...)]))))])

(define-syntax-rule (for/max init-minimum-value args ... last-expr)
  (for/fold ([maxv init-minimum-value])
            args ...
    (max maxv last-expr)))
```