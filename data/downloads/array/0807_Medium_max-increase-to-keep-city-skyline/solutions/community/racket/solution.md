# Racket Solution

**Author:** imakira
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4021080/](https://leetcode.com/problems/max-increase-to-keep-city-skyline/solutions/4021080/)

---

# Code
```
(define/contract (max-increase-keeping-skyline grid)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (let* ((max-by-row (map (lambda (row) (apply max row)) grid))
         (max-by-col (map (lambda (col) (apply max col)) (apply map list grid)))
         (new-matrix (map (lambda (i)
                            (map (lambda (j) (min i j))
                                 max-by-col))
                          max-by-row)))
    (- (apply + (flatten new-matrix))
       (apply + (flatten grid)))))
```