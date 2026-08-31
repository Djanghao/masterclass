# Racket ( apply )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-xor-after-operations/solutions/3762994/](https://leetcode.com/problems/maximum-xor-after-operations/solutions/3762994/)

---

```
(define/contract (maximum-xor nums)
    (-> (listof exact-integer?) exact-integer?)
    (apply bitwise-ior nums))
```