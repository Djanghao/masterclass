# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995453/](https://leetcode.com/problems/time-needed-to-buy-tickets/solutions/4995453/)

---

```
(define/contract (time-required-to-buy tickets k (acc 0))
  (-> (listof exact-integer?) exact-integer? exact-integer?)
  (let ((tickets-left (list-ref tickets k)))
    (cond ((= 0 tickets-left) acc)
          ((= 1 tickets-left) (+ acc (count
                                      positive?
                                      (take tickets (add1 k)))))
          (else (time-required-to-buy
                 (map
                  (lambda (a) (if (positive? a) (sub1 a) 0))
                  tickets)
                 k
                 (+ acc (count positive? tickets)))))))
```