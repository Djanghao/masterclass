# racket with pattern matching + repeat

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/perform-string-shifts/solutions/4537622/](https://leetcode.com/problems/perform-string-shifts/solutions/4537622/)

---

# Code
```scheme
(define (shift-right ls)
  (match ls
    [(list a ... b) (cons b a)]))

(define (shift-left ls)
  (match ls
    [(list* a b) (append b (list a))]))

(define (repeat fn times initial-val)
  (for/fold ([result initial-val])
            ([idx (in-range times)])
    (fn result)))

(define (string-shift s shift)
  (let* ([strls (string->list s)])
    (for/fold ([strls strls]
               #:result (list->string strls))
              ([shift-pair shift])
      (match-let ([(list dir mag) shift-pair])
        (match dir
          [0 (repeat shift-left mag strls)]
          [1 (repeat shift-right mag strls)])))))
```