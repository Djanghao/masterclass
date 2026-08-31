# racket solution

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5502897/](https://leetcode.com/problems/lucky-numbers-in-a-matrix/solutions/5502897/)

---

good luck

# Code
``` racket
(define (max-columns matrix)
    (let loop ([matrix matrix])
        (cond [(null? (car matrix)) '()]
              [else (cons (foldl max 0 (map car matrix)) (loop (map cdr matrix)))])))

(define (lucky-numbers  matrix)
    (let* ([minRow (map (lambda (x) (foldl min 999999 x)) matrix)]
           [maxColumn (max-columns matrix)]
           [maxMinRow (foldl max 0 minRow)]
           [minMaxColumn (foldl min 999999 maxColumn)])
        (if (eq? maxMinRow minMaxColumn) (list maxMinRow) '()))) 
```