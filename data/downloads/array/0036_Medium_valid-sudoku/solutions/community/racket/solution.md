# Fast, idiomatic Racket solution using foldl, map, andmap

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-sudoku/solutions/4359757/](https://leetcode.com/problems/valid-sudoku/solutions/4359757/)

---

# Code
```
(define (ref grid r c)
    (vector-ref (vector-ref grid r) c))

(define (is-valid-sudoku board)
  (define grid (list->vector (map list->vector board)))
  (andmap
    (lambda (r)
      (car (foldl ; first element of foldl is flag indicating whether we saw repeats
        (lambda (c acc)
          (define nexts (list 
            (ref grid r c)  ; next element by row
            (ref grid c r)  ; next element by col
            (ref grid (+ (* 3 (quotient r 3)) (quotient c 3)) (+ (* (modulo r 3) 3) (modulo c 3)))))  ; next element by box
          (cons  ; acc value 
            (and  ; "no repeats before AND no repeats on current iteration"
              (car acc) 
              (andmap 
                (lambda (st next) (not (set-member? st next))) 
                (cdr acc) 
                nexts))
            (map  ; update sets that contain elements from row, col, box
              (lambda (st next) (if (not (equal? next #\\.)) (set-add st next) st)) 
              (cdr acc) 
              nexts))) 
        (list #t (set) (set) (set)) ; '(no-repeats? row col box)
        (range (length (first board))))))  ; assuming each list in board is the same length
    (range (length board))))


```