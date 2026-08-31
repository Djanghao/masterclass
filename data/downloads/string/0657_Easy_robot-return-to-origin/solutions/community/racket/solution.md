# Racket ( fold )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/robot-return-to-origin/solutions/4086813/](https://leetcode.com/problems/robot-return-to-origin/solutions/4086813/)

---

```
(define/contract (judge-circle moves)
  (-> string? boolean?)
  (let* ((update-pos (lambda (c pos)
                       (case c
                         ((#\\U) (cons (add1 (car pos))
                                      (cdr pos)))
                         ((#\\D) (cons (sub1 (car pos))
                                      (cdr pos)))
                         ((#\\R) (cons (car pos)
                                      (add1 (cdr pos))))
                         ((#\\L) (cons (car pos)
                                      (sub1 (cdr pos))))))))
    (equal? '(0 . 0)
            (foldl update-pos '(0 . 0) (string->list moves)))))
```