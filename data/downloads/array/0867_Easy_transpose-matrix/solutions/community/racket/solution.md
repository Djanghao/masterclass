# Racket solution

**Author:** lrazo
**Votes:** 0
**Link:** [https://leetcode.com/problems/transpose-matrix/solutions/4384174/](https://leetcode.com/problems/transpose-matrix/solutions/4384174/)

---

# Code
```
(define/contract (transpose matrix)
  (-> (listof (listof exact-integer?)) (listof (listof exact-integer?)))
  (let ((num-rows (length (car matrix)))
        (num-cols (length matrix)))
    (for/list ((i (in-range num-rows)))
      (for/list ((j (in-range num-cols)))
        (list-ref (list-ref matrix j) i)))))
```