# Racket Solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/island-perimeter/solutions/5043309/](https://leetcode.com/problems/island-perimeter/solutions/5043309/)

---


# Code
```
(define/contract (island-perimeter grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (let* ([rows (length grid)]
         [cols (length (car grid))]
         [up 0]
         [down 0]
         [left 0]
         [right 0]
         [result 0])
    (for ([r (in-range rows)])
      (for ([c (in-range cols)])
        (define value (list-ref (list-ref grid r) c))
        (when (= value 1)
          (set! up (if (= r 0) 0 (list-ref (list-ref grid (- r 1)) c)))
          (set! left (if (= c 0) 0 (list-ref (list-ref grid r) (- c 1))))
          (set! down (if (= r (- rows 1)) 0 (list-ref (list-ref grid (+ r 1)) c)))
          (set! right (if (= c (- cols 1)) 0 (list-ref (list-ref grid r) (+ c 1))))
          (set! result (+ result (- 4 (+ up left right down)))))))
    result))

  
```