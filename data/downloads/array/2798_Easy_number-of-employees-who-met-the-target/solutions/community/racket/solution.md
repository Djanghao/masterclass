# Racket ( count )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3910758/](https://leetcode.com/problems/number-of-employees-who-met-the-target/solutions/3910758/)

---

```
(define/contract (number-of-employees-who-met-target hours target)
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (count (lambda (emp) (>= emp target)) hours))
```