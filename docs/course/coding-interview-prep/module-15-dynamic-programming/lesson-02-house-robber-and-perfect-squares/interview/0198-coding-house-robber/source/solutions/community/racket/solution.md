# racket 4ms, recursion with memoization

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber/solutions/6028150/](https://leetcode.com/problems/house-robber/solutions/6028150/)

---

# Code
```racket []
(define (rob nums)
  (let ([memo (make-hash)]
        [L (list->vector nums)])
    (let loop ([i 0] [avail #t])
      (if (= i (vector-length L))
          0
          (or (hash-ref memo (list i avail) #f)
              (begin
                (hash-set! memo (list i avail)
                           (max
                            (loop (add1 i) #t)
                            (if avail
                                (+ (vector-ref L i) (loop (add1 i) #f))
                                0)))
                (hash-ref memo (list i avail))))))))

```