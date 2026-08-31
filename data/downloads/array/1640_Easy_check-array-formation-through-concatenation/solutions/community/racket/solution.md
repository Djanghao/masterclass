# Racket Solution

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4507016/](https://leetcode.com/problems/check-array-formation-through-concatenation/solutions/4507016/)

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
(define getCounter
  (lambda (arr counter)
    (cond
      [(empty? arr) counter]
      [else
       (begin
         (hash-set! counter (first (first arr)) (first arr))
         (getCounter (rest arr) counter))])))

(define getArray
  (lambda (arr counter)
    (cond
      [(empty? arr) '()]
      [else
       (cond
         [(hash-has-key? counter (first arr)) (append (hash-ref counter (first arr)) (getArray (rest arr) counter))]
         [else (getArray (rest arr) counter)])])))

(define can-form-array
  (lambda (arr pieces)
    (cond
      [(equal? (getArray arr (getCounter pieces (make-hash))) arr) true]
      [else false])))
```