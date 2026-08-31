# Racket simple solution

**Author:** esehara
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/1287107/](https://leetcode.com/problems/maximum-number-of-coins-you-can-get/solutions/1287107/)

---

```scheme
(define (i-can-get-coins nums)
  (let ([piles (list->vector (sort nums >))])
  (define (inner start end result)
    (if (>= (add1 start) end) result
        (inner (+ start 2) (- end 1) (+ result (vector-ref piles (add1 start))))))
  (inner 0 (- (length nums) 1) 0)))

(define/contract (max-coins piles)
  (-> (listof exact-integer?) exact-integer?)
  (i-can-get-coins piles))
```