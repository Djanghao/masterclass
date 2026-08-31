# Racket match-expander + pattern matching

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4757505/](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/solutions/4757505/)

---

# Approach
There are only 8 win states. So we check for each of them for X, then for O. If neither win and we have moves left, Pending, else Draw

# Code
```scheme
(define-match-expander win-states
  (\u03BB (stx)
    (syntax-case stx ()
      [(_ p)
       #'(or (vector (vector p p p)
                     (vector _ _ _)
                     (vector _ _ _))
             (vector (vector _ _ _)
                     (vector p p p)
                     (vector _ _ _))
             (vector (vector _ _ _)
                     (vector _ _ _)
                     (vector p p p))
             (vector (vector p _ _)
                     (vector p _ _)
                     (vector p _ _))
             (vector (vector _ p _)
                     (vector _ p _)
                     (vector _ p _))
             (vector (vector _ _ p)
                     (vector _ _ p)
                     (vector _ _ p))
             (vector (vector p _ _)
                     (vector _ p _)
                     (vector _ _ p))
             (vector (vector _ _ p)
                     (vector _ p _)
                     (vector p _ _)))])))

(define (make-grid moves)
  (define (update-grid! grid x y value)
    (let ((row (vector-ref grid y)))
      (vector-set! row x value))
    grid)
  (let ([grid (vector (vector 0 0 0)
                      (vector 0 0 0)
                      (vector 0 0 0))])
    (for ([move moves]
          [player (in-cycle (list 'X 'O))])
      (match-let ([(list y x) move])
        (update-grid! grid x y player)))
    grid))

(define (tictactoe moves)
  (define grid (make-grid moves))
  (match grid
    [(win-states 'X) "A"]
    [(win-states 'O) "B"]
    [_ #:when (< (length moves) 9) "Pending"]
    [_ "Draw"]))
```