# racket 100ms

**Author:** hilariusbookbinder
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/6045920/](https://leetcode.com/problems/maximize-the-total-height-of-unique-towers/solutions/6045920/)

---

# Intuition
Sort in descending order. Take the min of the current item in the sorted list or 1 - the previous min. If we get to 0, then it's impossible.

# Code
```racket []
(define (maximum-total-sum maxH)
  (let ([L (sort maxH >)])
    (let loop ([L L] [prev (add1 (car L))] [ans 0])
      (cond ((<= prev 0) -1)
            ((null? L)   ans)
            (else        (let ([cur (min (sub1 prev) (car L))])
                           (loop (cdr L) cur (+ cur ans))))))))
```