# keep a running tally (172 ms)

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5893442/](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/solutions/5893442/)

---

# Intuition
Iterate over string. Whenever closing parentheses outnumber opening, insert an opening parenthesis and add 1 to res. At the end, if opening parens outnumber closing, add the difference to res.

# Code
```racket []
(define (min-add-to-make-valid s)
  (let ([memo (make-hash)]
        [res 0])
    (for ([ch s])
      (hash-set! memo ch (add1 (hash-ref memo ch 0)))
      (when (> (hash-ref memo #\\) 0) (hash-ref memo #\\( 0))
        (set! res (add1 res))
        (hash-set! memo #\\( (add1 (hash-ref memo #\\( 0)))))
    (+ res (- (hash-ref memo #\\( 0) (hash-ref memo #\\) 0)))))
```