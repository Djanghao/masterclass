# Racket simple sort and fold

**Author:** nverno
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/3785312/](https://leetcode.com/problems/non-overlapping-intervals/solutions/3785312/)

---

```
(define/contract (erase-overlap-intervals intervals)
  (-> (listof (listof exact-integer?)) exact-integer?)
  (for/fold ([res 0]
             [cur -1e5]
             #:result res)
            ([x (sort intervals < #:key cadr)])
    (if (< (car x) cur)
        (values (add1 res) cur)
        (values res (cadr x)))))
```