# Racket one liner

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1252534/](https://leetcode.com/problems/sorting-the-sentence/solutions/1252534/)

---

```scheme
(define/contract (sort-sentence s)
  (-> string? string?)
  (string-join (map list->string (map cdr (sort (map (lambda (x) (cons (car x) (reverse (cdr x)))) (map reverse (map string->list (string-split s))))(lambda (x y) (< (char->integer (car x)) (char->integer (car y))))))) " "))
```