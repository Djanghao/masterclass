# Racket Simple Solution

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-number/solutions/1645369/](https://leetcode.com/problems/palindrome-number/solutions/1645369/)

---

Convert the number to a string, and the string to a list. Then see if the list is equal with itself reversed

```
(define (palindrome? n)
  (let* ([number->string-list (lambda (n) (string->list (number->string n)))]
        [fwd (number->string-list n)])
    (equal? fwd (reverse fwd))))
```