# Check shifted rows for equality

**Author:** czrpb
**Votes:** 0
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/6045037/](https://leetcode.com/problems/toeplitz-matrix/solutions/6045037/)

---


# Code
```racket []
(define/contract (is-toeplitz-matrix matrix)
  (-> (listof (listof exact-integer?)) boolean?)

  (define [shift&check row previous-row]
    (cond
      [(not previous-row) previous-row]
      [(equal? (drop-right previous-row 1) (drop row 1)) row]
      [else #f]
      )
    )

  ((compose not not)
   (foldl shift&check (car matrix) (cdr matrix)))

  )

```