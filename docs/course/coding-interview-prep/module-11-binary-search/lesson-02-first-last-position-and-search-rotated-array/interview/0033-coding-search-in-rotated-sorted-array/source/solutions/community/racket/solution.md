# Racket ( recursion )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3882272/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/3882272/)

---

```
(define/contract (search nums target [index 0])
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (cond [(null? nums) -1]
        [(equal? target (car nums)) index]
        [else (search (cdr nums) target (add1 index))]))
```