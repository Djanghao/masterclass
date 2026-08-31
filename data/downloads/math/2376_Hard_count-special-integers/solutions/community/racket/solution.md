# Racket pattern match

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-special-integers/solutions/2426836/](https://leetcode.com/problems/count-special-integers/solutions/2426836/)

---

We know how the problem can be solved: Just recursive for the digits of `n`, but the hard part is the logic and bugs.
We use pattern match to enumerate cases one by one.

In each step of recursive, the result depends on

* `k`: `k` th digit
* `first-digit?`: Is the `k` th digit the first digit? (the digits before it are 0)
* `greater?`: Can `k` th digit greater than the corresponding digit in `n`?

```scheme
(define/contract (count-special-numbers n)
  (-> exact-integer? exact-integer?)

  ;; digits of `n` in an array
  (define ns (list->vector
              (reverse
               (map (lambda (c) (- (char->integer c)
                                   (char->integer #\\0)))
                    (string->list (number->string n))))))

  ;; rec

  (define (rec k bitset first-digit? greater?)
    (define (digit-of-n)
      (aref ns (sub1 k)))

    (define (ok? v)
      (and (not (bitwise-bit-set? bitset v))
           (or greater? (<= v (digit-of-n)))))

    (match* (k first-digit? greater?)
      [(0 #t _) 0]
      [(0 #f _) 1]
      [(_ #t _) (+ (rec (sub1 k) bitset #t #t)
                   (for/sum ([j (range 1 10)]
                             #:when (ok? j))
                     (rec (sub1 k) (+ bitset (expt 2 j)) #f (or greater? (< j (digit-of-n))))))]
      [(_ #f _) (for/sum ([j (range 0 10)]
                          #:when (ok? j))
                  (rec (sub1 k) (+ bitset (expt 2 j)) #f (or greater? (< j (digit-of-n)))))]))

  ;; cache `rec`

  (define (bool->int b)
    (if b 1 0))

  (define (cache fn dp)
    (lambda (a b c d)
      (when (= (aref dp a b (bool->int c) (bool->int d)) -1)
        (aset! dp a b (bool->int c) (bool->int d) (fn a b c d)))
      (aref dp a b (bool->int c) (bool->int d))))

  (define dp (make-array (add1 (vector-length ns)) (expt 2 10) 2 2 -1))
  (set! rec (cache rec dp))

  (rec (vector-length ns) 0 #t #f))
  
  ;; array helpers ;;
  
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