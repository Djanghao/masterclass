# Intuition, approaching, proof and code

**Author:** 6cdh
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3871699/](https://leetcode.com/problems/minimum-time-to-make-array-sum-at-most-x/solutions/3871699/)

---

# Intuition

EDITED: fix some error, add the proof of `max_possible_ops`.
EDITED 2: fix error in proof of `max_possible_ops`

## Notations

Let $A$ be the original `nums1`, $B$ be the original `nums2`.
So $A_i$ is `nums1[i]`.
Let the length of `nums1` be $n$.

## Limit

After $n$ seconds, a intuition is that the minimum possible sum we can get of `nums1` will not decrease. So we only consider the time $[0,n]$. The proof is at the end of the Approach section.

## After k seconds

After $k$ seconds, if we don't do operations, `nums1` will become this:

$$
A_0 + k \	imes B_0, A_1 + k \	imes B_1, ..., A_{n-1} + k \	imes B_{n-1}
$$

Then we add $k$ operations now, it equivalents we pick $k$ indexes $i_0, ..., i_{k-1}$, and change the values at these indexes are

$$
0, B_{i_1}, 2B_{i_2}, 3B_{i_3}, ..., (k-1)B_{i_{k-1}}
$$

Note we can pick indexes less than $k$, that means we reset twice for a index `j`. But then we can choose the earlier reset of `j`, and replace it with the reset of another index to make the sum of `nums1` smaller. That means a $k$ indexes solution is always better.

The sum of the current `nums1` is

$$
\\sum A + k \\sum B - (kB_{i_0} + (k-1)B_{i_1} + \\cdots + B_{i_{k-1}} + A_{i_0} + A_{i_1} + \\cdots + A_{i_{k-1}})
$$

To make this minimize, it means to make this maximize

$$
kB_{i_0} + (k-1)B_{i_1} + \\cdots + B_{i_{k-1}} + A_{i_0} + A_{i_1} + \\cdots + A_{i_{k-1}}
$$

## Conclusion

In other words, we pick $k$ elements $b_0, b_1, ..., b_{k-1}$ from $B$ and their corresponding elements in $A$: $a_0,a_1, ..., a_{k-1}$, and try to maximize this:

$$
kb_0 + a_0 + (k-1)b_1 + a_1 + \\cdots + b_{k-1} + a_{k-1}
$$

# Approach

It's easy. For example, if we already chosen $k$ indexes, then sort all chosen $b_i$ in decreasing order, and calculate the formula in order to maximize it.

So it means we can just sort `nums2` and run dynamic programming on it. The complexity is $O(nk)$. The cached function looks like this:

```python
minimum_sum(i, k)
```

where `i` is the index, `k` is the number of operations.

Then we scan from `0` to `max_possible_ops`:

```python
for k in range(0, max_possible_ops):
    if minimum_sum(0, k) <= x:
        return k
return -1
```

What is `max_possible_ops`?

After $n$ seconds, every element is reset at least once. We only consider their latest reset.

Suppose after $t+1$ seconds, we have sequence $a$ that can maximize this formula:

$$
a_0B_0 + a_1B_1 + \\cdots + a_{n-1}B_{n-1} + \\sum A
$$

$1 \\le a_i \\le t+1$

The same for $t$ seconds, we have sequence $b$

$$
b_0B_0 + b_1B_1 + \\cdots + b_{n-1}B_{n-1} + \\sum A
$$

$1 \\le b_i \\le t$

Both sequence have no duplicate. $a$ contains $t+1$, $b$ contains $t$ for the latest reset. And $t \\ge n$.

Then the increment will be

$$
\\sum B - (a_0B_0 + a_1B_1 + \\cdots + a_{n-1}B_{n-1})
+ (b_0B_0 + b_1B_1 + \\cdots + b_{n-1}B_{n-1})
$$

The two expression in the parentheses were maximized. We can simply sort $B$ in decreasing order and make sequence $a$ be $t+1, t, ..., t-n+2$, and $b$ be $t, t-1, ..., t-n+1$ to achieve this.

Finally,

$$
\\sum B - (a_0B_0 + a_1B_1 + \\cdots + a_{n-1}B_{n-1})
+ (b_0B_0 + b_1B_1 + \\cdots + b_{n-1}B_{n-1})\\\\
= 0
$$

That means the minimum sum of `nums1` after time $n$ will not decrease, and will not change actually. So `max_possible_ops` can be $n+1$.

# Complexity

- Time complexity: $O(n^2)$
- Space complexity: $O(n^2)$

# Code

Racket code

```racket
(define (minimum-time nums1 nums2 x)
  (define inf #e1e10)
  (define sum1 (list-sum nums1))
  (define sum2 (list-sum nums2))
  (vec! nums1 nums2)
  (define n (alen nums1))
  (define sorted2
    (list->vector
      (sort (range 0 n)
            (\u03BB (a b)
              (> (aref nums2 a) (aref nums2 b))))))

  (define (indexof i)
    (aref sorted2 i))

  (define (minimum-sum i op)
    (match i
      [(== n) (if (= op 0) sum1 inf)]
      [i (min (minimum-sum (add1 i) op)
              (if (= op 0)
                  inf
                  (+ sum2
                     (- (aref nums1 (indexof i)))
                     (- (* op (aref nums2 (indexof i))))
                     (minimum-sum (add1 i) (sub1 op)))))]))

  (cachef! minimum-sum n (add1 n) -1)

  (or (for/first ([op (in-closed-range 0 n)]
                  #:when (<= (minimum-sum 0 op) x))
        op)
      -1))


(require syntax/parse/define)

(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (make-vector n init)]
    [(_ n args ...)
     (build-vector n (lambda _ (make-array args ...)))]))

(define-syntax aref
  (syntax-rules ()
    [(_ arr) arr]
    [(_ arr i args ...)
     (aref (vector-ref arr i) args ...)]))

(define-syntax aset!
  (syntax-rules ()
    [(_ arr i v)
     (vector-set! arr i v)]
    [(_ arr i args ... v)
     (aset! (vector-ref arr i) args ... v)]))

(define-syntax-rule (alen arr)
  (vector-length arr))

(define-syntax-parse-rule (cachef! fn:id args:expr ...)
  (set! fn (cachef fn args ...)))

(define-syntax-parser cachef
  [(_ fn:id)
   #'(cachef-hash fn)]
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

(define (cachef-hash fn)
  (let ([cache (make-hash)])
    (lambda args
      (when (not (hash-has-key? cache args))
        (hash-set! cache args (apply fn args)))
      (hash-ref cache args))))

(define-syntax-parse-rule (vec! var:id ...)
  (let ()
    (vec1! var) ...))

(define-syntax-parse-rule (vec1! var:id)
  (set! var
        (cond [(string? var) (list->vector (string->list var))]
              [(list? var) (list->vector var)]
              [else var])))

(define (list-sum lst)
  (foldl + 0 lst))

(define in-closed-range in-inclusive-range)
```