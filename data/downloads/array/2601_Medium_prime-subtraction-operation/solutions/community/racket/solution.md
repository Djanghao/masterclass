# racket 225ms, sieve of erastothenes and binary search

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-subtraction-operation/solutions/6032172/](https://leetcode.com/problems/prime-subtraction-operation/solutions/6032172/)

---

# Intuition
Get primes using sieve. Then use binary search over the sieve to lower each item in the input list as much as possible. Return true if ascending order is maintained.

# Code
```racket []
(define (prime-sub-operation nums)
  (let ([p (list->vector (primes 1000))])
    (let loop ([L nums] [prev 0])
      (if (null? L)
          #t
          (let* ([newval
                  (- (car L)
                     (vector-ref p (bisect p (- (car L) (add1 prev)))))])
            (if (<= newval prev)
                (if (<= (car L) prev)
                    #f
                    (loop (cdr L) (car L)))
                (loop (cdr L) newval)))))))

(define (primes n)
  "All primes less than or equal to n."
  (let ([sieve (make-hash)]
        [ans '()])
    (for ([x (in-range 2 (add1 n))])
      (if (hash-ref sieve x #f)
          (for ([p (hash-ref sieve x)])
            (hash-set! sieve (+ p x)
                       (cons p (hash-ref sieve (+ p x) '()))))
          (begin
            (set! ans (cons x ans))
            (hash-set! sieve (* x x)
                       (cons x (hash-ref sieve (* x x) '()))))))
    ans))

(define (bisect L target)
  (let loop ([l 0] [r (sub1 (vector-length L))])
    (if (>= l r)
        l
        (let ([mid (floor (/ (+ l r) 2))])
          (if (> (vector-ref L mid) target)
              (loop (add1 mid) r)
              (loop l mid))))))
```