# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5989629/](https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum/solutions/5989629/)

---

```racket []
  (letrec ((sum-digits (lambda (n)
                         (if (< n 10)
                             n
                             (let ((digit (remainder n 10)))
                               (+ digit
                                  (sum-digits (quotient (- n digit) 10)))))))
           (digit-sums (map sum-digits nums)))
    (apply min digit-sums)))
```