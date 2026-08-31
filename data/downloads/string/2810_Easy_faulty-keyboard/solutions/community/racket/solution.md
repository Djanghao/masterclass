# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/4885248/](https://leetcode.com/problems/faulty-keyboard/solutions/4885248/)

---

```
(define/contract (final-string s)
  (-> string? string?)
  (list->string
    (foldl
      (lambda (c acc)
        (if (equal? c #\\i) ; if 'i'?
          (reverse acc) ; reverse accumulation
          (append acc (list c)))) ; add to accumulation
      empty
      (string->list s))))
```