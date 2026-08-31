# Racket similar to two-sum

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-square-numbers/solutions/5838014/](https://leetcode.com/problems/sum-of-square-numbers/solutions/5838014/)

---

# Code
```racket []
(define (judge-square-sum c)
  (let ([L (for/list ([i (in-range (add1 (integer-sqrt c)))])
             (* i i))]
        [seen (make-hash)])
    (for/or ([x (in-list L)])
      (hash-set! seen x #t)
      (hash-ref seen (- c x) #f))))
```