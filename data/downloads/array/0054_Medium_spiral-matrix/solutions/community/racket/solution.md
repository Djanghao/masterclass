# Racket solution using pattern matching

**Author:** jrciii
**Votes:** 1
**Link:** [https://leetcode.com/problems/spiral-matrix/solutions/1479843/](https://leetcode.com/problems/spiral-matrix/solutions/1479843/)

---

```scheme
(require racket/match)
(require srfi/26)
(define/contract (spiral-order matrix)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))
  (spiral matrix)
  )

(define (spiral matrix)
  (match matrix
    ['() '()]
    [(list a) a]
    [(list (list a) ..1) (flatten a)]
    [(list a b) (append a (reverse b))]
    [(list a b ..1 c)
     #:when (= 2 (length a))
     (append a (flatten (map last b)) (reverse c) (flatten (map first (reverse b))) )]
    [(list a b ..1 c) (append a (flatten (map last b)) (reverse c) (flatten (map first (reverse b))) (spiral (map (compose cdr (cut drop-right <> 1)) b)))]))
```