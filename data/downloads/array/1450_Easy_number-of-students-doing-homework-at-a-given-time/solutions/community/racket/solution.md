# Racket foldl solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1287152/](https://leetcode.com/problems/number-of-students-doing-homework-at-a-given-time/solutions/1287152/)

---

```scheme
(define (solve start-time end-time query-time)
  (foldl 
   (lambda (x result) (if (and (<= (car x) query-time) (<= query-time (cdr x))) 
                          (+ result 1) result)) 0
   (map (lambda (x y) (cons x y)) start-time end-time)))
```