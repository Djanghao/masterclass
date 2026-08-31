# Racket simple solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1289042/](https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/solutions/1289042/)

---

```scheme
(define (check-uniq? lst)
  (and 
   (not (char=? (car lst) (cadr lst)))
   (not (char=? (car lst) (caddr lst)))
   (not (char=? (cadr lst) (caddr lst)))))

(define (solve s)
  (define (inner lst result)
    (cond [(< (length lst) 3) result]
          [(check-uniq? lst) (inner (cdr lst) (add1 result))]
          [else (inner (cdr lst) result)]))
  (inner (string->list s) 0))

(define/contract (count-good-substrings s)
  (-> string? exact-integer?)
  (solve s))
  ```