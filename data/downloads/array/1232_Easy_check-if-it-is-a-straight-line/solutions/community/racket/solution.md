# racket with point slope form line equation

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/4720860/](https://leetcode.com/problems/check-if-it-is-a-straight-line/solutions/4720860/)

---

# Approach
Build a line equation with point-slope form `y - y1 = m * (x - x1)` to avoid calculating `b` in `y = mx + b`. If the denominator of `m` is `0`, then we have a vertical line, and then we must check if the interior points are all equal to the same constant (I used `x1`)

# Code
```scheme
(define (check-straight-line coordinates)
  (match-let* ([(list x1 y1) (first coordinates)]
               [(list xn yn) (last coordinates)]
               [(list m-numer m-denom) (list (- yn y1) (- xn x1))]
               [eqn (if (zero? m-denom)
                        (\u03BB (x y) (equal? x x1))
                        (\u03BB (x y) (equal? (- y y1) (* (/ m-numer m-denom)
                                                     (- x x1)))))])
    (andmap (curry apply eqn) (drop-right (rest coordinates) 1))))
```