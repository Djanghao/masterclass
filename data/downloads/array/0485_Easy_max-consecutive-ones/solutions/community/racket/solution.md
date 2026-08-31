# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/4502070/](https://leetcode.com/problems/max-consecutive-ones/solutions/4502070/)

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

(define max
  (lambda (x y)
    (cond
      [(> x y) x]
      [else y])))

(define solver
  (lambda (arr acc mx n)
    (cond
      [(= n 1)
       (cond
         [(= (first arr) 1) (max mx (+ acc 1))]
         [else (max mx acc)])]
      [else
       (cond
         [(= (first arr) 1) (solver (rest arr) (+ acc 1) mx (- n 1))]
         [else (solver (rest arr) 0 (max mx acc) (- n 1))])])))

(define find-max-consecutive-ones
  (lambda (arr)
    (solver arr 0 0 (length arr))))
```