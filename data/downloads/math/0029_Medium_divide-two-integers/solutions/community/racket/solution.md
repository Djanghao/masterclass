# Racket Solution

**Author:** speculateow
**Votes:** 2
**Link:** [https://leetcode.com/problems/divide-two-integers/solutions/4213859/](https://leetcode.com/problems/divide-two-integers/solutions/4213859/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
(define min_limit (* -1 (expt 2 31)))
(define max_limit (- (expt 2 31) 1))

(define/contract (divide dividend divisor)
  (-> exact-integer? exact-integer? exact-integer?)
    (min (max (mod dividend divisor) min_limit) max_limit)
  )

(define (mod dividend divisor)
  (let ((result (mod_helper (abs dividend) (abs divisor))))
    (cond
      ((and (> dividend 0) (> divisor 0)) result)
      ((and (< dividend 0) (< divisor 0)) result)
      (else (* result -1)))))

(define (mod_helper dividend divisor)
  (if (< dividend divisor)
      0
      (let ((helper_result (division_helper dividend divisor 1)))
        (+ helper_result (mod_helper (- dividend (* divisor helper_result)) divisor)))))
        
(define (division_helper dividend divisor n)
  (if (> (* divisor (expt 2 n)) dividend)
      (expt 2 (- n 1))
       (division_helper dividend divisor (+ n 1))))


```