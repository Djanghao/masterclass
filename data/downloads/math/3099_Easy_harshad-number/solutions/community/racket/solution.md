# Racket solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/harshad-number/solutions/4972968/](https://leetcode.com/problems/harshad-number/solutions/4972968/)

---

```
(define/contract (sum-of-the-digits-of-harshad-number x)
  (-> exact-integer? exact-integer?)
  (let* ((digits (map
                  (lambda (c)
                    (- (char->integer c)
                       (char->integer #\\0)))
                  (string->list (number->string x))))
         (sum-of-digits (apply + digits)))
    (if (zero? (modulo x sum-of-digits))
        sum-of-digits
        -1)))
```