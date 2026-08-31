# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5825618/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/5825618/)

---

```racket []
(define/contract (remove-trailing-zeros num)
  (-> string? string?)
  (cond ((equal? #\\0 num) num)
        ((equal? #\\0 (last (string->list num)))
         (remove-trailing-zeros (substring num 0 (- (string-length num) 1))))
        (else num)))
```