# Racket ( map )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3959949/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/3959949/)

---

```
(define/contract (is-acronym words s)
  (-> (listof string?) string? boolean?)
  (let ((first-char (lambda (word) (car (string->list word)))))
    (equal? s (list->string (map first-char words)))))
```