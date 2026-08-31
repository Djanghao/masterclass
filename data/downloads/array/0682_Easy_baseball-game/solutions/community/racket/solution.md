# Super simple solution using pattern matchin

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/baseball-game/solutions/4489820/](https://leetcode.com/problems/baseball-game/solutions/4489820/)

---

# Code
```
(define (cal-points operations)
  (let loop ([lst operations] [record '()])
    (match lst
        ['() (apply + record)]
        [(cons "+" xs) (loop xs (cons (+ (first record) (second record)) record))]
        [(cons "D" xs) (loop xs (cons (* 2 (car record)) record))]
        [(cons "C" xs) (loop xs (cdr record))]
        [(cons x xs) (loop xs (cons (string->number x) record))])))
```