# Intuitive Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3270788/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3270788/)

---

# Intuition

For each node `i` as root, we count the number of correct guesses and see if it is at least `k`.

# Approach

The intuition is simple, and looks like $O(n * g)$ complexity.
The trick is the number of edges is `n-1`, we can cache
the count procedure to get linear complexity. See the code.

# Complexity
- Time complexity: $O(n + g)$

- Space complexity: $O(n + g)$

# Code
```
(define (root-count edges guesses k)
  (define n (add1 (length edges)))

  (define adj-of
    (let ([adjs (make-vector n '())])
      (for ([e edges])
        (aupd! adjs (first e) (\u03BB (old) (cons (second e) old)))
        (aupd! adjs (second e) (\u03BB (old) (cons (first e) old))))
      (\u03BB (i) (aref adjs i))))

  (define in-guesses?
    (let ([guesses-set (list->set guesses)])
      (\u03BB (edge) (set-member? guesses-set edge))))

  (define (correct-count root from)
    (for/sum ([a (adj-of root)]
              #:when (not (= a from)))
      (cond [(in-guesses? (list root a))
             (add1 (correct-count a root))]
            [else
             (correct-count a root)])))

  (cachef! correct-count)

  (for/sum ([i n])
    (if (>= (correct-count i -1) k)
        1
        0)))

(define-syntax-rule (aupd! arr dims ... fn)
  (aset! arr dims ... (fn (aref arr dims ...))))

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

(define (cachef-hash fn)
  (let ([cache (make-hash)])
    (lambda args
      (when (not (hash-has-key? cache args))
        (hash-set! cache args (apply fn args)))
      (hash-ref cache args))))

(define-syntax-rule (cachef! fn)
  (set! fn (cachef-hash fn)))

```