# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/pass-the-pillow/solutions/5424683/](https://leetcode.com/problems/pass-the-pillow/solutions/5424683/)

---

If time is zero, return the index. Otherwise, if the index is on either end (e.g., equal to 1 or n), set the direction, update the index, and decrement the time. Otherwise, update the index in the current direction and decrement the time.
```
(define/contract (pass-the-pillow n time)
  (letrec ((iter (lambda (time (ind 1) (dir 1))
                   (if (= 0 time)
                       ind
                       (cond ((= ind 1) (iter (- time 1) 2 1))
                             ((= ind n) (iter (- time 1) (- n 1) -1))
                             (else (iter (- time 1) (+ ind dir) dir)))))))
    (iter time)))
```