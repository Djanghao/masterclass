# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4502141/](https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/solutions/4502141/)

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
(define solver
  (lambda (arr)
    (cond
      [(empty? arr) ""]
      [else (string-append (first arr) (solver (rest arr)))])))

(define array-strings-are-equal
  (lambda (word1 word2)
    (cond
      [(equal? (solver word1) (solver word2)) true]
      [else false])))
```