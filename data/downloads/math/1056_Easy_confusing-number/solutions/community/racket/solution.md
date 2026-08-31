# racket replace and reverse

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/confusing-number/solutions/4540948/](https://leetcode.com/problems/confusing-number/solutions/4540948/)

---

# Code

```scheme
(require (only-in srfi/1 unfold-right))

(define (int->digit-list int)
  (unfold-right zero? (curryr remainder 10) (curryr quotient 10) int))

(define (digit-list->int ls)
  (foldl (\u03BB (digit power) (+ (* 10 power) digit)) 0 ls))

(define rotate-hsh
  (make-hash '((0 0) (1 1) (6 9) (8 8) (9 6))))

(define (confusing-number n)
  (let ([dig-ls (int->digit-list n)])
    (if (not (andmap (\u03BB (v) (member v (hash-keys rotate-hsh))) dig-ls))
        #f
        ((compose not (curry equal? n) digit-list->int reverse flatten)
         (map (curry hash-ref rotate-hsh) dig-ls)))))
```