# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3896253/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/3896253/)

---

```
(define/contract (search nums target)
  (-> (listof exact-integer?) exact-integer? boolean?)
  (not (boolean? (member target nums))))
```