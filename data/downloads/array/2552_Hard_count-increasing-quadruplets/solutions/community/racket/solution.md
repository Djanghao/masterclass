# Racket solution and a little hint to make it easy

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-increasing-quadruplets/solutions/3113043/](https://leetcode.com/problems/count-increasing-quadruplets/solutions/3113043/)

---

# Intuition

We know the condition `nums[k] < nums[j]`
is the source of the difficulty.
**Hint**: let's only count the pairs that meet `nums[k] < nums[j]` and
`j < k`.
Then for each pair `(nums[k], nums[j])`, we find how many `i` meet that `i < j` and `nums[i] < nums[k]`, `l` is the same.

# Complexity

- Time complexity: $O(n^2)$

- Space complexity: $O(n^2)$

# Code

```scheme
(require srfi/43)

(define (count-quadruplets nums)
  (define vec (list->vector nums))
  (define n (vector-length vec))

  (define (count-pair vec cmp)
    (define count-before (make-array n (add1 n) 0))
    (for ([i (range 1 n)])
      (define last (aref vec (sub1 i)))
      (for ([v (range 1 (add1 n))])
        (aset! count-before i v
               (+ (aref count-before (sub1 i) v)
                  (if (cmp last v)
                      1
                      0)))))
    count-before)

  (define count-before (count-pair vec <))
  (define count-after (vector-reverse-copy
                       (count-pair (vector-reverse-copy vec) >)))

  (for*/sum ([k n]
             [j k]
             #:when (< (aref vec k) (aref vec j)))
    (define how-many-i (aref count-before j (aref vec k)))
    (define how-many-l (aref count-after k (aref vec j)))
    (* how-many-i how-many-l)))

(define-syntax aset!
  (syntax-rules ()
    [(_ arr i v)
     (vector-set! arr i v)]
    [(_ arr i args ... v)
     (aset! (vector-ref arr i) args ... v)]))

(define-syntax aref
  (syntax-rules ()
    [(_ arr) arr]
    [(_ arr i args ...)
     (aref (vector-ref arr i) args ...)]))

(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (make-vector n init)]
    [(_ n args ...)
     (build-vector n (lambda _ (make-array args ...)))]))

```