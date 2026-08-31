# Pascal's Triangle II Racket Solution

**Author:** jaeyeon-jo-kr
**Votes:** 0
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/4482890/](https://leetcode.com/problems/pascals-triangle-ii/solutions/4482890/)

---

# Code
```
(define/contract (get-row rowIndex)
  (-> exact-integer? (listof exact-integer?))
  (match rowIndex
     [0 '(1)]
     [else 
     (let* ([row (get-row (- rowIndex 1))]
            [a (cons 0 row)]
            [b (append row (list 0))])
        (map + a b))]))
```