# Racket ( recursive ) solution

**Author:** dedmonds
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-balanced-string/solutions/6049273/](https://leetcode.com/problems/check-balanced-string/solutions/6049273/)

---

Convert the string to a list of digits and recursively iterate over each digit, alternatively adding or subtracting the value from an accumulated sum. Once complete (empty list), check that the sum is zero.
```racket []
(define/contract (is-balanced num)
  (-> string? boolean?)
  (let ((digits (map
                 (lambda (c)
                   (- (char->integer c) 48))
                 (string->list num))))
    (let loop ((even #t)
               (digs digits)
               (sum 0))
      (if (empty? digs)
          (= 0 sum)
            (loop (not even)
                  (cdr digs)
                  (+ sum (if even (car digs) (- (car digs)))))))))
```