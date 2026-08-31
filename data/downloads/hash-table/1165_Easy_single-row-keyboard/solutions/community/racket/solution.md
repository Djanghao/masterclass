# racket index-of

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/4549462/](https://leetcode.com/problems/single-row-keyboard/solutions/4549462/)

---

# Code

```scheme
(define (calculate-time keyboard word)
  (match-let* ([(list keeb-ls word-ls) (map string->list (list keyboard word))]
               [indices (cons 0 (map (curry index-of keeb-ls) word-ls))])
    (for/sum ([idx indices]
              [ridx (rest indices)])
      (abs (- ridx idx)))))

```