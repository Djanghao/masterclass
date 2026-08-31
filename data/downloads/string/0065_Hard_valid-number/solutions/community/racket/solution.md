# Racket's string->number

**Author:** Shway4
**Votes:** 0
**Link:** [https://leetcode.com/problems/valid-number/solutions/4662612/](https://leetcode.com/problems/valid-number/solutions/4662612/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use Racket's own string->number function

# Code
```
; checks if any element of lst appears in list s
(define (lstmember lst s)
	(cond
		[(null? lst) #f]
		[else (or (member (car lst) s) (lstmember (cdr lst) s))]
	)
)

(define/contract (is-number s)
	(-> string? boolean?)
	(if (and (not (lstmember (list #\\f #\\L) (string->list s))) (string->number s)) #t #f)
)
```