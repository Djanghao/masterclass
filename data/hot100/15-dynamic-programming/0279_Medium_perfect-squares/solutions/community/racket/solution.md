# Racket dynamic programming

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/perfect-squares/solutions/4699189/](https://leetcode.com/problems/perfect-squares/solutions/4699189/)

---

# Code
```
(define (num-squares n)
  (let ([dp (make-vector (add1 n) 999999)])
    (begin
      (vector-set! dp 0 0)
      (for ([i (range 1 (add1 n))])
        (let ([nearest (floor (sqrt i))])
          (for ([j (range 1 (add1 nearest))])
            (vector-set! dp i (min
                               (vector-ref dp i)
                               (add1 (vector-ref dp (- i (* j j)))))))))
      (vector-ref dp n))))
```