# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/monotonic-array/solutions/4501920/](https://leetcode.com/problems/monotonic-array/solutions/4501920/)

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
(define length
  (lambda (arr)
    (cond
      [(empty? arr) 0]
      [else (+ 1 (length (rest arr)))])))

(define solver
  (lambda (pred arr n)
    (cond
      [(= n 1) true]
      [else
       (cond
         [(pred (first arr) (first (rest arr))) false]
         [else (solver pred (rest arr) (- n 1))])])))

(define is-monotonic
  (lambda (arr)
    (or (solver (lambda (x y) (> x y)) arr (length arr)) (solver (lambda (x y) (< x y)) arr (length arr)))))

```