# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/detect-capital/solutions/5163687/](https://leetcode.com/problems/detect-capital/solutions/5163687/)

---

```
(define/contract (detect-capital-use word)
  (-> string? boolean?)
  (or (equal? word (string-downcase word))
      (equal? word (string-upcase word))
      (equal? word (string-titlecase word))))
```