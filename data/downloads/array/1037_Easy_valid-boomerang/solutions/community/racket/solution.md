# [Racket] Pattern matching

**Author:** hunkyjimpjorps
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-boomerang/solutions/1186933/](https://leetcode.com/problems/valid-boomerang/solutions/1186933/)

---

```scheme
#lang racket
(define/contract (is-boomerang points)
  (-> (listof (listof exact-integer?)) boolean?)
  (match points
    [(list-no-order a b c) #:when (equal? a b) #false]    ; Are any two points the same?
    [(list (list x _) (list x _) (list x _)) #false]      ; Are they on a horizontal line?
    [(list (list _ y) (list _ y) (list _ y)) #false]      ; Are they on a vertical line?
    [(list-no-order (list x1 _) (list x2 _) (list x3 _))  ; Are two points on a horizontal line,
     #:when (and (= x1 x2)                                ; but the third point isn't?
                 (not (= x1 x3))) #true]
    [(list-no-order (list _ y1) (list _ y2) (list _ y3))  ; Are two points on a vertical line,
     #:when (and (= y1 y2)                                ; but the third point isn't?
                 (not (= y1 y3))) #true]
    [(list (list x1 y1) (list x2 y2) (list x3 y3))        ; If none of the special cases apply,
     (let ([m (/ (- y2 y1) (- x2 x1))])                   ; calculate the slope between two points
       (not (= y3 (+ y1 (* m (- x3 x1))))))]))            ; and see if the line passes through the third
```