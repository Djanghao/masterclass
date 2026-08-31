# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-stack-using-queues/solutions/3969494/](https://leetcode.com/problems/implement-stack-using-queues/solutions/3969494/)

---

```
(define my-stack%
  (class object%
    (super-new)
    (init-field)
    (define stck '())
    
    ; push : exact-integer? -> void?
    (define/public (push x)
      (set! stck (cons x stck)))

    ; pop : -> exact-integer?
    (define/public (pop)
      (let ((res (car stck)))
        (set! stck (cdr stck))
        res))

    ; top : -> exact-integer?
    (define/public (top)
      (car stck))

    ; empty : -> boolean?
    (define/public (empty)
      (null? stck))))
```