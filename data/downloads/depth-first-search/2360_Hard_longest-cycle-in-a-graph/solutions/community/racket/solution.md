# racket graph coloring

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/2358455/](https://leetcode.com/problems/longest-cycle-in-a-graph/solutions/2358455/)

---

```scheme
(define/contract (longest-cycle edges)
  (-> (listof exact-integer?) exact-integer?)

  (define n (length edges))
  (define vec (list->vector edges))
  (define graph (make-array n -1))

  (define (loop-count i)
    (define cnt 0)
    (define color1 i)
    (define color2 (- (+ i 2)))

    (define (rec j)
      (when (> j -1)
        (match (aref graph j)
          [-1 (aset! graph j color1)
              (rec (aref vec j))]
          [(== color1) (set! cnt (add1 cnt))
                       (aset! graph j color2)
                       (rec (aref vec j))]
          [_ #f])))
    (rec i)
    (if (= cnt 0) -1 cnt))

  (for/fold ([maxv -1])
            ([i n])
    (max maxv (loop-count i))))
	
;; helpers ;;
	
(define-syntax make-array
  (syntax-rules ()
    [(_ n init)
     (make-vector n init)]
    [(_ n args ...)
     (build-vector n (lambda _ (make-array args ...)))]))

(define-syntax aref
  (syntax-rules ()
    [(_ arr i)
     (vector-ref arr i)]
    [(_ arr i args ...)
     (aref (vector-ref arr i) args ...)]))

(define-syntax aset!
  (syntax-rules ()
    [(_ arr i v)
     (vector-set! arr i v)]
    [(_ arr i args ...)
     (aset! (vector-ref arr i) args ...)]))
```