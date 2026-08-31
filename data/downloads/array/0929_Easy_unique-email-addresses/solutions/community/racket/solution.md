# Simple Racket solution

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-email-addresses/solutions/4484727/](https://leetcode.com/problems/unique-email-addresses/solutions/4484727/)

---

# Code
```
(define (dot? char)
    (equal? char #\\.))

(define (parse email)
    (let* ([lst (string-split email "@")]
           [loc (car (string-split (first lst) "+"))]
           [no-dots (list->string (filter-not dot? (string->list loc)))]
           [dom (second lst)]) 
        (string-append no-dots "@" dom)))

(define (num-unique-emails emails)
  (length (remove-duplicates (map parse emails))))
```