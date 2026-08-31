# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3795392/](https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/solutions/3795392/)

---

```
(define/contract (subtract-product-and-sum n)
  (-> exact-integer? exact-integer?)
  (let* ([char->number (compose string->number string)]
         [digits (map char->number (string->list (~v n)))])
    (- (apply * digits)
       (apply + digits))))
```