# Racket solution

**Author:** lolywk
**Votes:** 0
**Link:** [https://leetcode.com/problems/keyboard-row/solutions/3989543/](https://leetcode.com/problems/keyboard-row/solutions/3989543/)

---

**Time** :: O(n^2)


```
(define/contract (list-includes lst v)
  (-> (listof any/c) any/c boolean?)
  (and (member v lst) #t))

(define/contract (find-words words)
  (-> (listof string?) (listof string?))
  (define first-row (string->list "qwertyuiop"))
  (define second-row (string->list "asdfghjkl"))
  (define third-row (string->list "zxcvbnm"))

  (filter 
    (lambda (word)
            (let [(chars (string->list (string-downcase word)))]
              (or (andmap (lambda (ch) (list-includes first-row ch)) chars)
                  (andmap (lambda (ch) (list-includes second-row ch)) chars)
                  (andmap (lambda (ch) (list-includes third-row ch)) chars))))
    words))
```