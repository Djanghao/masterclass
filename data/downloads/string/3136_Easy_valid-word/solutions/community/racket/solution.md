# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-word/solutions/5154704/](https://leetcode.com/problems/valid-word/solutions/5154704/)

---

```
(define/contract (is-valid word)
  (-> string? boolean?)
  (let ((chars (string->list word))
        (char-vowel? (lambda (c)
                       (member
                        (char-downcase c)
                        (string->list "aeiou")))))
    (and (> (string-length word) 2)
         (andmap
          (lambda (c)
            (or (char-alphabetic? c)
                (char-numeric? c)))
          chars)
         (ormap char-vowel? chars)
         (ormap
          (lambda (c)
            (and (not (char-vowel? c))
                 (not (char-numeric? c))))
          chars))))
```