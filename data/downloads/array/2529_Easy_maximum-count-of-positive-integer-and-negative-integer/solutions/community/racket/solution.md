# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4926770/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4926770/)

---

```
(define/contract (maximum-count nums)
  (-> (listof exact-integer?) exact-integer?)
  (apply max
    (foldl
      (lambda (num acc)
        (cond ((zero? num) acc) ; no change
              ((< num 0) (list (add1 (car acc)) ; add neg
                               (cadr acc)))
              (else (list (car acc)
                    (add1 (cadr acc)))))) ; add pos
      '(0 0) ; (count-neg count-pos)
      nums)))
```