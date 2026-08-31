# Racket with and without stdlib

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/to-lower-case/solutions/1832247/](https://leetcode.com/problems/to-lower-case/solutions/1832247/)

---

The second function iterates through the string as a list of chars, checking if they are upper case. If they are, it downcases them and appends the new char to an output char list, which is coerced to a string when the initial string is empty

```
;; with built-in function
(define (to-lower-case s)
  (string-downcase s))

;; without builtin function
(define (to-lower-case s)
  (let rc ([str (string->list s)] [new-str '()])
    (cond [(empty? str) (list->string new-str)]
          [(char-upper-case? (first str))
           (rc (rest str) (append new-str (list (char-downcase (first str)))))]
          [else (rc (rest str) (append new-str (list (first str))))])))
```