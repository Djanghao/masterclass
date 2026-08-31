# Simple 2-line O(n) Racket solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-palindrome/solutions/4374521/](https://leetcode.com/problems/valid-palindrome/solutions/4374521/)

---

# Code
```
(define (char-alphanum? c)
    (or (char-numeric? c) (char-alphabetic? c)))

(define (is-palindrome s)
    (let* ([str (filter char-alphanum? (string->list (string-downcase s)))])
    (equal? str (reverse str))))
```