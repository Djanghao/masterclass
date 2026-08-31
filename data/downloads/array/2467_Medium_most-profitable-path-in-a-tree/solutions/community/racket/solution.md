# Racket DFS Solution

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2807465/](https://leetcode.com/problems/most-profitable-path-in-a-tree/solutions/2807465/)

---

See the code. We firstly complete the function `alice-go` and see what information we need.
Then complete that undefined functions `bob-go` and `build-tree` after that.

```scheme
(define/contract (most-profitable-path edges bob amt-lst)
  (-> (listof (listof exact-integer?)) exact-integer? (listof exact-integer?) exact-integer?)

  (define amount (list->vector amt-lst))
  (define n (vector-length amount))

  (define bob-arive-time (make-hash))
  (define graph (make-vector n '()))
  (define tree (make-vector n '()))

  (for ([p edges])
    (aset! graph (first p)
           (cons (second p) (aref graph (first p))))
    (aset! graph (second p)
           (cons (first p) (aref graph (second p)))))

  (define (build-tree i from)
    (for ([j (aref graph i)]
          #:when (not (= from j)))
      (aset! tree i (cons j (aref tree i)))
      (build-tree j i)))

  (build-tree 0 0)

  (define total 0)

  (define (bob-go i steps)
    (cond [(= i bob) (set! total steps)
                     (hash-set! bob-arive-time i (- total steps))
                     #t]
          [(null? (aref tree i)) #f]
          [else
           (for/or ([j (aref tree i)])
             (let ([ret (bob-go j (add1 steps))])
               (when ret
                 (hash-set! bob-arive-time i (- total steps)))
               ret))]))

  (bob-go 0 0)

  (define (alice-go i steps)
    (let ([income (aref amount i)])
      (+ (cond
           [(not (hash-has-key? bob-arive-time i)) income]
           [(< (hash-ref bob-arive-time i) steps) 0]
           [(= (hash-ref bob-arive-time i) steps) (/ income 2)]
           [else income])
         (if (null? (aref tree i)) 0
             (for/fold ([maxv #e-1e9])
                       ([j (aref tree i)])
               (max maxv (alice-go j (add1 steps))))))))

  (alice-go 0 0))

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

```