# Racket

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-perimeter-triangle/solutions/1801597/](https://leetcode.com/problems/largest-perimeter-triangle/solutions/1801597/)

---

The idea is the following:
1. Sort in reverse order
2. Take the first 3 values and check if they can make a valid triangle
	a. If not, then drop the first value and check the next 3 values
	b. If they are valid, then this is the largest possible valid triangle

```
(define (triangle-check ls)
  (let ([a (first ls)] [b (second ls)] [c (last ls)])
    (and (> (+ a b) c)
         (> (+ a c) b)
         (> (+ b c) a))))

(define (largest-perimeter nums)
  (let rc ([ls (reverse (sort nums <))])
    (if (< (length ls) 3) 0
        (let ([first-3 (take ls 3)])
          (if (triangle-check first-3)
              (apply + first-3)
              (rc (rest ls)))))))
```