# Racket solution with sorting

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731509/](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/solutions/4731509/)

---


# Code
```racket
(define (largest-perimeter nums)
  (let loop ([nums (sort nums >)]
             [len (length nums)])
    (if (< len 3)
        -1
        (let* ([max (car nums)]
               [sum (apply + nums)])
               (if (> (- sum max) max)
                   sum
                   (loop (cdr nums) (sub1 len)))))))
```