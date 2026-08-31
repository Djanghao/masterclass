# The Simplest Solution based on Recursion

**Author:** 6cdh
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5390544/](https://leetcode.com/problems/maximum-height-of-a-triangle/solutions/5390544/)

---

# Intuition

recursion on two cases:

1. red then blue
2. blue then red

# Complexity
- Time complexity: $O(h)$ for answer $h$.

- Space complexity: $O(1)$

# Code
```scheme
(define (max-height-of-triangle red blue)
  (define (arrange color1 color2 height)
    (if (< color1 height)
      (sub1 height)
      (arrange color2 (- color1 height) (add1 height))))

  (max (arrange red blue 1) (arrange blue red 1)))

```