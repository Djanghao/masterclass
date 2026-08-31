# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559176/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5559176/)

---

# Code
```
(define/contract (minimum-deletions s)
  (-> string? exact-integer?)
    (let* ([rev-lst (for/fold ([lst empty]) ([c s]) (cons c lst))]
           [remove-count (count (lambda (c) (char=? c #\\b)) rev-lst)])
      (cdr (for/fold 
                ([acc (cons remove-count remove-count)]) ; curr-count min-delete
                ([c rev-lst])
        (let ([new-curr-count (+ (car acc) (if (char=? c #\\a) 1 -1))])
        (cons new-curr-count (min (cdr acc) new-curr-count)))))))
```