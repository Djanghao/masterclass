# Racket ( sort )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/3874376/](https://leetcode.com/problems/check-if-array-is-good/solutions/3874376/)

---

```
(define/contract (is-good nums)
  (-> (listof exact-integer?) boolean?)
  (let ([n (length nums)])
    (equal? (sort nums <) (append (range 1 n) (list (sub1 n))))))
```