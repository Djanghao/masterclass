# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5163630/](https://leetcode.com/problems/count-the-number-of-special-characters-i/solutions/5163630/)

---

```
(define/contract (number-of-special-chars word)
  (-> string? exact-integer?)
  (let ((counts (foldl
                 (lambda (c acc)
                   (let ((entry (assoc c acc)))
                     (if entry
                         (cons (cons c (+ 1 (cdr entry)))
                               (remove entry acc))
                         (cons (cons c 1)
                               acc))))
                 '()
                 (string->list word))))
    (foldl
     (lambda (pair acc)
       (let ((c (car pair)))
         (if (member c (string->list "abcdefghijklmnopqrstuvwxyz"))
             (let* ((matching-c (integer->char (- (char->integer c) 32)))
                    (entry (assoc matching-c counts)))
               (if entry
                   (+ 1 acc)
                   acc))
             acc)))
     0
     counts)))
```