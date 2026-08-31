# Racket binary search

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4613963/](https://leetcode.com/problems/closest-binary-search-tree-value/solutions/4613963/)

---

# Code
```scheme
(define (closest-value root target)
  (let* ([min-dev (cons +Inf.0 0)]
         [check-dev (\u03BB (v)
                      (let ([dev (abs (- target v))])
                        (cond [(< dev (car min-dev)) (set! min-dev (cons dev v))]
                              [(= dev (car min-dev)) (set! min-dev (cons dev (min v (cdr min-dev))))])))])
    (let loop ([root root])
      (if (false? root)
          '()
          (match-let ([(tree-node v l r) root])
            (cond [(> v target) (begin (check-dev v) (loop l))]
                  [(< v target) (begin (check-dev v) (loop r))]
                  [else (set! min-dev (cons 0 v))]))))
    (cdr min-dev)))
```