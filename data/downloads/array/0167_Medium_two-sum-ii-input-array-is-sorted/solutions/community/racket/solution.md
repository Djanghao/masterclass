# Clean, Recursive two-pointer solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4374565/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/4374565/)

---

# Code
```
(define (two-sum numbers target)
  (define nums (list->vector numbers)) ; for constant time lookups
  (define (two-sum-helper left right)
    (let* ([sum (+ (vector-ref nums left) (vector-ref nums right))])
        (cond
            [(= sum target) (list (add1 left) (add1 right))]
            [(< sum target) (two-sum-helper (add1 left) right)]
            [(> sum target) (two-sum-helper left (sub1 right))])))
  (two-sum-helper 0 (sub1 (length numbers))))
```