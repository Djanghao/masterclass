# racket 3ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6056747/](https://leetcode.com/problems/defuse-the-bomb/solutions/6056747/)

---

# Code
```racket []
(define (decrypt code k)
  (let ([L (list->vector code)])
    (if (zero? k)
        (make-list (vector-length L) 0)
        (for/list ([i (vector-length L)])
          (for/sum ([j (if (positive? k)
                           (in-range (add1 i) (add1 (+ i k)))
                           (in-range (- i (abs k)) i))])
            (vector-ref L (modulo j (vector-length L))))))))
```