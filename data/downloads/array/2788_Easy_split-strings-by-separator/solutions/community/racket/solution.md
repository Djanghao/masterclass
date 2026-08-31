# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-strings-by-separator/solutions/3835650/](https://leetcode.com/problems/split-strings-by-separator/solutions/3835650/)

---

```
(define/contract (split-words-by-separator words separator)
  (-> (listof string?) char? (listof string?))
  (let ([split (lambda (s) (string-split s (string separator)))]
        [notempty? (lambda (s) (not (equal? "" s)))])
    (filter notempty? (flatten (map split words)))))
```