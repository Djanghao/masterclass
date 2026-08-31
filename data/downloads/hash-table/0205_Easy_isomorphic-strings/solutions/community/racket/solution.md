# Racket with for/ comprehensions

**Author:** dr-neptune
**Votes:** 1
**Link:** [https://leetcode.com/problems/isomorphic-strings/solutions/4525507/](https://leetcode.com/problems/isomorphic-strings/solutions/4525507/)

---

# Code

`check-mapping` constructs a hash map that maps a letter to its counterpart, and then traverses both strings in tandem and ensures that the mapping is held.

then we just check that the mapping holds both ways s->t and t->s

```scheme
(define (is-isomorphic s t)
  (define (check-mapping str-ls1 str-ls2)
    (let ([letter-map (for/hash ([s1 str-ls1] [s2 str-ls2]) (values s1 s2))])
      (for/and ([s1 str-ls1] [s2 str-ls2])
        (equal? (hash-ref letter-map s1) s2))))
  (match-let ([(list str1 str2) (map string->list (list s t))])
    (and (check-mapping str1 str2) (check-mapping str2 str1))))
```