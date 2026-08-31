# Racket ( recursive, fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6056057/](https://leetcode.com/problems/smallest-divisible-digit-product-i/solutions/6056057/)

---

```racket []
(define/contract (smallest-number n t)
  (-> exact-integer? exact-integer? exact-integer?)
  (let ((digit-product (lambda (num)
                         (foldl
                          (lambda (c acc)
                            (* acc
                               (- (char->integer c)
                                  (char->integer #\\0))))
                          1
                          (string->list (number->string num))))))
    (let loop ((num n))
      (if (= 0 (remainder (digit-product num) t))
          num
          (loop (+ num 1))))))
```