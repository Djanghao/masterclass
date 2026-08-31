# racket 0ms?

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/6028174/](https://leetcode.com/problems/house-robber-ii/solutions/6028174/)

---

# Code
```racket []
(define (rob nums)
  (let ([memo (make-hash)]
        [L (list->vector nums)])
    (define (loop i end avail)
      (if (= i end)
          0
          (or (hash-ref memo (list i end avail) #f)
              (begin
                (hash-set! memo (list i end avail)
                           (max
                            (loop (add1 i) end #t)
                            (if avail
                                (+ (vector-ref L i) (loop (add1 i) end #f))
                                0)))
                (hash-ref memo (list i end avail))))))
    (if (= 1 (vector-length L))
        (vector-ref L 0)
        (max (loop 0 (sub1 (vector-length L)) #t)
             (loop 1 (vector-length L) #t)))))
```