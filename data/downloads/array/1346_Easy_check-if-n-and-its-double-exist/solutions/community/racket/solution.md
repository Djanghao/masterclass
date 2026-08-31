# racket, 3ms: set

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6102134/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/6102134/)

---

# Code
```racket []
(define (check-if-exist arr)
  (let loop ([L arr] [memo (set)])
    (if (null? L)
        #f
        (or (set-member? memo (* 2 (car L)))
            (set-member? memo (/ (car L) 2))
            (loop (cdr L) (set-add memo (car L)))))))
```