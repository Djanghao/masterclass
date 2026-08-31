# Recursive Racket

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/excel-sheet-column-title/solutions/1700873/](https://leetcode.com/problems/excel-sheet-column-title/solutions/1700873/)

---


```
(define (convert-to-title columnNumber [vals '()])
  (if (<= columnNumber 0)
      (list->string vals)
      (convert-to-title (quotient (sub1 columnNumber) 26)
                        (append (list (integer->char (+ (remainder (sub1 columnNumber) 26) 65)))
                                vals))))
```