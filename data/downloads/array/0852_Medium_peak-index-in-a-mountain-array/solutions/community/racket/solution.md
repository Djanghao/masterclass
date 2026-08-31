# Racket ( recursive, list-index )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3811896/](https://leetcode.com/problems/peak-index-in-a-mountain-array/solutions/3811896/)

---

```
(define/contract (peak-index-in-mountain-array arr)
  (-> (listof exact-integer?) exact-integer?)
  (list-index (apply max arr) arr))

(define/contract (list-index item lst [index 0])
  (-> exact-integer? (listof exact-integer?) exact-integer?)
  (cond [(null? lst) -1]
        [(equal? item (car lst)) index]
        [else (list-index item (cdr lst) (add1 index))]))
```