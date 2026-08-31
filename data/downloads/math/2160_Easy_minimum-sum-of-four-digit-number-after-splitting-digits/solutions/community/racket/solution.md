# Using degenerated two pointer

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3133450/](https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/solutions/3133450/)

---

# Intuition
Sort digits and compare two 2-digit numbers.

# Approach
Split to digits then sort it in ascending order. After, using `digit_sum_multiples` calculate two numbers corresponding to two possible combinations of digits (`p1` and `p2` in the code) and find `min`.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
(define/contract (minimum-sum num)
  (-> exact-integer? exact-integer?)
    (let* ([d (digits num 10)]
            [e (sort d <)]
            [mult '(10 10 1 1)]
            [p1 '(0 1 2 3)]
            [p2 '(0 2 1 3)])
      (min (digit_sum mult e p1) (digit_sum mult e p2))))

(define (digits n base . args)
  (let ((b (if (null? args) base (car args))))
    (let loop ((n n) (d '()))
      (if (zero? n) d
        (loop (quotient n b)
          (cons (modulo n b) d))))))

(define (digit_sum multiples array positions)
(apply + 
  (map (lambda (n1 n2)
    (* n1 (list-ref array n2)))
      multiples
      positions)))

(define (min a b)
  (cond
   [(< b a) b]
   [else a]))
```