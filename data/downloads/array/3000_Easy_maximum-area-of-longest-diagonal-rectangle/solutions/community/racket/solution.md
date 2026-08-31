# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4824242/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4824242/)

---

```
(define/contract (area-of-max-diagonal dimensions)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (cdr ; extract area from cons cell returned by fold
    (foldl
        (lambda (dims acc)
          (let* ((diag-msf (car acc))   ; diagonal max so far
                 (area-msf (cdr acc))   ; area max so far
                 (l (car dims))         ; length
                 (w (cadr dims))        ; width
                 (diag (sqrt (+ (* l l) ; diagonal of current rectangle
                                (* w w))))
                 (area (* l w)))        ; area of current rectangle
            (cond ((> diag diag-msf) (cons diag area)) ; update longest diagonal and area
                  ((= diag diag-msf) (if (> area area-msf)
                                         (cons diag-msf area) ; update area
                                         acc)) ; no update
                  (else acc)))) ; no update
        '(0 . 0) ; (diag-msf . area-msf) cons cell
        dimensions)))

```