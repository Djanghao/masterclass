# [Racket] O(n) solution using a mutable set

**Author:** benkwokcy
**Votes:** 0
**Link:** [https://leetcode.com/problems/set-mismatch/solutions/1090743/](https://leetcode.com/problems/set-mismatch/solutions/1090743/)

---

Add all numbers from 1 to n into a mutable set.
Iterate through nums and remove each number from the set. If the number is already removed, remember that is the duplicated number.
At the end, the missing number is the number left in the set.

```lisp
(define (find-error-nums nums)
  (define n (length nums))
  (define number-set (list->mutable-set (range 1 (+ n 1))))
  (define duplicated-number -1)
  (for ([i nums])
    (if (set-member? number-set i)
        (set-remove! number-set i)
        (set! duplicated-number i)))
  (list duplicated-number (set-first number-set)))
```