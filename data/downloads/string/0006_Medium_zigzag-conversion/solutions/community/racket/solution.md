# Too much math.

**Author:** nathaniel-ingle
**Votes:** 0
**Link:** [https://leetcode.com/problems/zigzag-conversion/solutions/4692245/](https://leetcode.com/problems/zigzag-conversion/solutions/4692245/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Any character at position x in the string will be in the (x mod 2(numRows - 1)) or (2(numRows - 1) - (x mod 2(numRows - 1))) row. 

# Code
```
(define (repeat n element)
  (if (zero? n) '() (cons element (repeat (sub1 n) element))))

(define/contract (convert s numRows [mod (* (sub1 numRows) 2)]
                          [remaining (string->list s)] [current-index 0] [sections (repeat numRows "")])
  (-> string? exact-integer? string?)
  (cond
    [(= numRows 1) s]
    [(empty? remaining) (apply string-append sections)]
    [else (convert s numRows mod (rest remaining) (add1 current-index)
                   (let ([position (remainder current-index mod)])
                     (list-update sections (if (>= position (sub1 numRows)) (- mod position) position)
                                  (lambda (x) (string-append x (string (first remaining)))))))]))
```