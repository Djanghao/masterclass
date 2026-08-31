# Racket ( recursion, all? )

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3832684/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/3832684/)

---

```
(define/contract (check-if-pangram sentence)
  (-> string? boolean?)
  (letrec ([all? (lambda (f lst)
                   (cond [(null? lst) #t]
                         [(not (f (car lst))) #f]
                         [else (all? f (cdr lst))]))]
           [contains-char? (lambda (c)
                             (string-contains? sentence (string c)))])
    (all? contains-char? (string->list "abcdefghijklmnopqrstuvwxyz"))))
```