# racket

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1826407/](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/solutions/1826407/)

---

The idea here is the following:
1. Iterate over both strings until you find 2 first characters that differ
2. Get all indices of the rest of the first string that are the differing first character of the second string
3. See if swapping any of those indices in the rest of the first string will make it equal the rest of the second string


```
(define (check-rest-for-letter strls1 strls2 char-1 char-2)
  (let rc ([indices (indexes-of strls1 char-1)])
    (cond [(empty? indices) #f]
          [(equal? strls2 (list-set strls1 (first indices) char-2)) #t]
          [else (rc (rest indices))])))

(define (union-str-strls str)
  (if (list? str) str (string->list str)))

(define (are-almost-equal s1 s2)
  (let* ([s1 (union-str-strls s1)]
         [s2 (union-str-strls s2)])
    (cond [(empty? s1) #t]
          [(char=? (first s1) (first s2))
           (are-almost-equal (rest s1) (rest s2))]
          [else (check-rest-for-letter (rest s1) (rest s2) (first s2) (first s1))])))
```