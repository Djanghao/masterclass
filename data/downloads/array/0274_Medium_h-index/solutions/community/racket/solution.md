# Racket list operations

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/h-index/solutions/4187607/](https://leetcode.com/problems/h-index/solutions/4187607/)

---

# Code
```scheme
(define (enumerate ls)
  (map cons (stream->list (in-inclusive-range 1 (length ls))) ls))

(define (h-index citations)
  (match citations
    [(list 0 ...) 0]
    [_ (let* ([scit (sort citations >)]
              [ind-scit (enumerate scit)])
           (car (last (filter (\u03BB (pair) (>= (cdr pair) (car pair))) ind-scit))))]))
```