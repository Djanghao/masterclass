# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4553431/](https://leetcode.com/problems/determine-if-string-halves-are-alike/solutions/4553431/)

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
(define getValue
  (lambda (s arr)
    (cond
      [(empty? s) 0]
      [else
       (if (member (first s) arr)
           (+ 1 (getValue (rest s) arr))
           (getValue (rest s) arr))])))

(define halves-are-alike
  (lambda (s)
    (begin
      (define n (string-length s))
      (define a (string->list (substring s 0 (/ n 2))))
      (define b (string->list (substring s (/ n 2) n)))
      (define arr '(#\\a #\\A #\\e #\\E #\\i #\\I #\\o #\\O #\\u #\\U))
      (= (getValue a arr) (getValue b arr)))))

```