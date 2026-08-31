# Using split to digits

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/strictly-palindromic-number/solutions/3117968/](https://leetcode.com/problems/strictly-palindromic-number/solutions/3117968/)

---

# Intuition
Check if $$n$$ is palindromic in $$2 \\le base \\le n-2$$.

# Approach
Split to digits, then loop through the possible bases checking if $n$ is palindromic.

# Complexity
- Time complexity:
$$O(1)$$

- Space complexity:
$$O(1)$$

# Code
```
(define/contract (is-strictly-palindromic n)
  (-> exact-integer? boolean?)
    (is_strict n)
  )

(define (is_strict n)
  (for/and ([base (in-range 2 (- n 1))])
    (is_palindromic n base)))

(define (is_palindromic n base) 
  (let {[digit-split (digits n base)]}
    (equal? (reverse digit-split) digit-split)))

(define (digits n base . args)
  (let ((b (if (null? args) base (car args))))
    (let loop ((n n) (d '()))
      (if (zero? n) d
          (loop (quotient n b)
                (cons (modulo n b) d))))))
```