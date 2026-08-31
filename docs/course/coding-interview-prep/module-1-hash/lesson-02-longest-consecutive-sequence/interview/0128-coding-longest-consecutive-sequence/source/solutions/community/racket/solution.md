# O(n) solution using pattern matching + set

**Author:** hilalmufti
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-consecutive-sequence/solutions/4363313/](https://leetcode.com/problems/longest-consecutive-sequence/solutions/4363313/)

---

# Code
``` Racket
(define (longest-consecutive nums)
  (define uniq (list->set nums))

  (define (seq x a)
    (cond
      [(set-member? uniq x) (seq (add1 x) (add1 a))]
      [else a]))

  (let loop ([l (set->list uniq)] [m 0])
    (match l
      ['() m]
      [(cons x xs) #:when (not (set-member? uniq (sub1 x))) (loop xs (max m (seq x 0)))]
      [(cons x xs) (loop xs m)])))
```