# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5094249/](https://leetcode.com/problems/number-of-wonderful-substrings/solutions/5094249/)

---

# Code
```racket
(define/contract (char->int ch)
  (-> char? exact-integer?)
  (- (char->integer ch) (char->integer #\\a)))

(define/contract (wonderful-substrings word)
  (-> string? exact-integer?)
  (let ([dp (make-vector (expt 2 10))])
    (vector-set! dp 0 1)
    (let-values ([(_ v)
    (for/fold ([curr 0][ans 0])([ch word])
      (let* ([curr-new (bitwise-xor curr (arithmetic-shift 1 (char->int ch)))]
            [ans-new (+ ans (vector-ref dp curr-new)
                     (for/sum ([i (in-range 10)])
                       (vector-ref dp (bitwise-xor curr-new (arithmetic-shift 1 i)))))])
        (vector-set! dp curr-new (add1 (vector-ref dp curr-new)))
        (values curr-new ans-new)))])
      v)))
```