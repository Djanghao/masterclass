# Racket Solution Hash Table

**Author:** juanlopezaranzazu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4509684/](https://leetcode.com/problems/find-maximum-number-of-string-pairs/solutions/4509684/)

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
(define setValue
  (lambda (counter x)
    (if (hash-has-key? counter x)
        (hash-set! counter x (+ 1 (hash-ref counter x)))
        (hash-set! counter x 1))))

(define getCounter
  (lambda (arr counter)
    (cond
      [(empty? arr) counter]
      [else
       (begin
         (define x (first arr))
         (define y (list->string (reverse (string->list x))))
         (if (string<? x y)
               (setValue counter x)
               (setValue counter y))
         (getCounter (rest arr) counter))])))

(define solver
  (lambda (values acc)
    (cond
      [(empty? values) acc]
      [else
       (if (= (remainder (first values) 2) 0)
           (solver (rest values) (+ acc (/ (first values) 2)))
           (solver (rest values) acc))])))

(define maximum-number-of-string-pairs
  (lambda (words)
    (begin
      (define counter (getCounter words (make-hash)))
      (solver (hash-values counter) 0))))
      
```