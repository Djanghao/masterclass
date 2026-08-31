# Racket bit-vector Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-unique-binary-string/solutions/4371754/](https://leetcode.com/problems/find-unique-binary-string/solutions/4371754/)

---


# Code
```
(require data/bit-vector)

(define/contract (find-different-binary-string nums)
  (-> (listof string?) string?)
  (let* ([len (length nums)][s (make-bit-vector (expt 2 len) #f)])
    (for ([i nums]) (bit-vector-set! s (string->number i 2) #t))

    (~r (for/first ([i (in-range (expt 2 len))] #:when (not (bit-vector-ref s i)) )
       i) #:base 2 #:min-width len #:pad-string "0")
  )
  )

```