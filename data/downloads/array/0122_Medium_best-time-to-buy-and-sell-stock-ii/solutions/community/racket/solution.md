# Easy Functional Solution

**Author:** cypherbeep
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4544643/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4544643/)

---


```
(define/contract (max-profit prices)
  (-> (listof exact-integer?) exact-integer?)

  (define (calculate-profit acc prices)
    (match prices
      [(list) acc]
      [(list today) acc]
      [(cons today (cons tomorrow rest))
       (if (> tomorrow today)
           (calculate-profit (+ acc (- tomorrow today)) (cons tomorrow rest))
           (calculate-profit acc (cons tomorrow rest)))]))

  (calculate-profit 0 prices))
```