# Racket BFS

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/snakes-and-ladders/solutions/3092464/](https://leetcode.com/problems/snakes-and-ladders/solutions/3092464/)

---

# Intuition

This problem likes DP or BFS.

# Complexity
- Time complexity: $O(n^2)$

- Space complexity: $O(n^2)$

# Code

```scheme
(define (snakes-and-ladders board-lst)
  (define board (for/vector ([line board-lst])
                  (for/vector ([v line])
                    v)))
  (define n (vector-length board))
  (define last-pos (sqr n))
  (define dist-inf (add1 last-pos))
  (define min-moves (make-array n n dist-inf))

  (define (id->coord id)
    (define row-from-bottom (quotient (sub1 id) n))
    (define row (- (- n 1) row-from-bottom))
    (define char-idx (sub1 (- id (* n row-from-bottom))))
    (define col
      (cond [(even? row-from-bottom) char-idx]
            [else (- (- n 1) char-idx)]))
    (list row col))

  (define (jump poses)
    (for/list ([pos poses])
      (match (aref* board (id->coord pos))
        [-1 pos]
        [next next])))

  (define (not-seen? id)
    (= dist-inf (aref* min-moves (id->coord id))))

  (define (go poses steps)
    (when (not (null? poses))
      (define old-poses (jump poses))
      (define new-poses '())
      (for ([pos old-poses]
            #:when (not-seen? pos))
        (aset*! min-moves (id->coord pos) steps)
        (for ([next (in-inclusive-range (+ pos 1) (min last-pos (+ pos 6)))])
          (set! new-poses (cons next new-poses))))
      (go new-poses (add1 steps))))

  (go '(1) 0)
  (if (not-seen? last-pos)
      -1
      (aref* min-moves (id->coord last-pos))))

(define (aset*! arr dims val)
  (cond [(null? (cdr dims)) (vector-set! arr (car dims) val)]
        [else
         (aset*! (vector-ref arr (car dims)) (cdr dims) val)]))

(define (aref* arr dims)
  (cond [(null? dims) arr]
        [else (aref* (vector-ref arr (car dims)) (cdr dims))]))

(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (make-vector n init)]
    [(_ n args ...)
     (build-vector n (lambda _ (make-array args ...)))]))

```