# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/4508114/](https://leetcode.com/problems/find-words-containing-character/solutions/4508114/)

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
  (lambda (arr x acc)
    (cond
      [(empty? arr) '()]
      [else
       (cond
         [(string-contains? (first arr) x) (cons acc (solver (rest arr) x (+ acc 1)))]
         [else (solver (rest arr) x (+ acc 1))])])))

(define find-words-containing
  (lambda (words x)
    (solver words (list->string (list x)) 0)))

```