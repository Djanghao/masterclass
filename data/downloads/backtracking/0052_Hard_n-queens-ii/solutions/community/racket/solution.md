# Pure functional solution in 20 lines

**Author:** bearxy39
**Votes:** 0
**Link:** [https://leetcode.com/problems/n-queens-ii/solutions/1854569/](https://leetcode.com/problems/n-queens-ii/solutions/1854569/)

---

```
(define != (compose1 not =))
(define not-empty? (compose1 not empty?))

(define (get-pred row pos)
  (\u03BB(r i)
    (and
     (!= i pos)
     (!= (abs (- row r)) (abs (- pos i))))))

(define (do-row n row preds pos-list)
  (if (< row 0) (list pos-list)
      (let* ([indices (range n)]
             [candidates (filter
                          (\u03BB(i) (andmap (\u03BB(p) (p row i)) preds))
                          indices)]
             [results (map
                       (\u03BB(i) (do-row n (- row 1) (cons (get-pred row i) preds) (cons i pos-list)))
                       candidates)]
             [solutions (filter not-empty? results)])
        (apply append solutions))))
        
(define (total-n-queens n)
  (length (do-row n (- n 1) '() '())))
```