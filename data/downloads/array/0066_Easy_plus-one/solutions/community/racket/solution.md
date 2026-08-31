# Easy Racket Recursive solution ;)

**Author:** ellie_yotkova
**Votes:** 2
**Link:** [https://leetcode.com/problems/plus-one/solutions/3032364/](https://leetcode.com/problems/plus-one/solutions/3032364/)

---

# Approach
The solution is pretty simple. If the last element is diferent from 9, then we will increanse the last element and that will be the answer. Otherwise we set the last element to be 0 and apply the same logic for the rest of the list.

# Code
```
(define (plus-one digits)
    (define (addOne dig)
    (cond ( (null? dig) (cons 1 '()) )
          ((equal? (car dig) 9) (cons 0 (addOne (cdr dig) ) ) )
          (else (cons (+ (car dig) 1)  (cdr dig)))
     )
        )
     (reverse (addOne (reverse digits)))
)
```
Please **UpVote** if you like my solution. It motivates me to keep posting ;)
Here is my **LinkedIn**, if you'd like to connect: https://www.linkedin.com/in/elitza-yotkova-4a0a17244/