# racket 24ms: check incoming edges

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-champion-ii/solutions/6085973/](https://leetcode.com/problems/find-champion-ii/solutions/6085973/)

---

# Intuition
If only one node has 0 incoming edges, return it, otherwise -1.

# Code
```racket []
(define (find-champion n edges)
  (let ([memo (make-vector n #f)])
    (for ([x edges])
      (vector-set! memo (second x) #t))
    (let loop ([i 0] [cur 0] [node #f])
      (cond ((= i n) (if (= cur 1) node -1))
            ((= cur 2) -1)
            ((not (vector-ref memo i)) (loop (add1 i) (add1 cur) i))
            (else (loop (add1 i) cur node))))))
```