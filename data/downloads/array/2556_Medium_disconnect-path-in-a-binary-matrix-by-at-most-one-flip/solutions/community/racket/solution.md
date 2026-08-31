# Racket solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141776/](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/solutions/3141776/)

---

# Intuition

We use a DP matrix to record if a node is reachable.
The distance from $(0,0)$ to $(m-1,n-1)$ is $d=m-1+n-1$.
For $1 \\le k < d$, there should always be a reachable node $(i,j)$ that meet $i+j = k$.
For a given k, if there only one node meet that condition, we can remove it to get a disconnected graph.

# Complexity

- Time complexity: $O(mn)$
- Space complexity: $O(mn)$

# Code

```racket
(define (is-possible-to-cut-path grid-lst)
  (define grid (for/vector ([row grid-lst])
                 (for/vector ([v row])
                   v)))
  (define m (vector-length grid))
  (define n (vector-length (aref grid 0)))
  (define counts (make-vector (+ m n) 0))
  (define reachable (make-array m n #f))
  (aset! reachable 0 0 #t)
  (for* ([i m]
         [j n])
    (when (and (= 1 (aref grid i j))
               (or (if (= i 0) #f (aref reachable (sub1 i) j))
                   (if (= j 0) #f (aref reachable i (sub1 j)))))
      (aset! reachable i j #t)
      (aupd! counts (+ i j) add1)))
  (for/or ([i (range 1 (+ m n -2))])
    (<= (aref counts i) 1)))

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

(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (make-vector n init)]
    [(_ n args ...)
     (build-vector n (lambda _ (make-array args ...)))]))

```