# Racket solution with pattern matching

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/word-pattern/solutions/4524733/](https://leetcode.com/problems/word-pattern/solutions/4524733/)

---

# Code
```
(define (word-pattern pattern s)
    (and (= (string-length pattern) (length (string-split s)))
    (let loop ([pat (string->list pattern)] [sl (string-split s)] [p->t (hash)] [t->p (hash)])
        (match* (pat sl)
            [('() '()) #t]
            [((cons p ps) (cons t ts)) #:when (and (not (hash-has-key? p->t p)) (not (hash-has-key? t->p t)))  (loop ps ts (hash-set p->t p t) (hash-set t->p t p))]
            [((cons p ps) (cons t ts)) #:when (and (equal? (hash-ref p->t p #f) t) (equal? (hash-ref t->p t #f) p)) (loop ps ts p->t t->p)]
            [(_ _) #f]))))
```