# Racket ( fold ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5825569/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/5825569/)

---

Check that the number of values that do not have the lowest bit set is greater than one.
```racket []
(define/contract (has-trailing-zeros nums)
  (-> (listof exact-integer?) boolean?)
  (let ((unset-low-bits (foldl
                         (lambda (num acc)
                           (+ acc
                              (if (zero? (bitwise-and num 1))
                                  1
                                  0)))
                         0
                         nums)))
    (> unset-low-bits 1)))
```