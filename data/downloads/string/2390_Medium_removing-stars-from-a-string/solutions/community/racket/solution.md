# Pattern matching + recursion

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/removing-stars-from-a-string/solutions/4489974/](https://leetcode.com/problems/removing-stars-from-a-string/solutions/4489974/)

---

# Code
```
(define (remove-stars s)
    (let loop ([lst (string->list s)] [res '()])
        (match lst
            ['() (list->string (reverse res))]
            [(cons #\\* cs) (loop cs (cdr res))]
            [(cons c cs) (loop cs (cons c res))])))
```