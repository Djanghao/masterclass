# stringify > lengthify > transpose > max

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/6031880/](https://leetcode.com/problems/find-the-width-of-columns-of-a-grid/solutions/6031880/)

---


# Code
```racket []
(define/contract (find-column-width grid)
  (-> (listof (listof exact-integer?)) (listof exact-integer?))

  (define grid-stringified (map (curry map ~a) grid)) ; ints -> strings
  (define grid-lengthified (map (curry map string-length) grid-stringified)) ; strings -> lengths
  (define grid-t (apply map list grid-lengthified)) ; transpose

  (map (curry apply max) grid-t)

  )

```