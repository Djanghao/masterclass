# Maximum Score From Removing Substrings

**Author:** bigbag
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463236/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463236/)

---

# Intuition
The problem requires maximizing the score by removing "ab" and "ba" substrings. The key insight is to prioritize removing the higher-scoring substring first, as this can potentially create more opportunities for removals.

# Approach
- Determine which substring ("ab" or "ba") gives more points and prioritize it.
- If "ba" gives more points, reverse the string to maintain the same logic.
- Iterate through the string, keeping count of 'a's and 'b's:
- For 'a', increment the 'a' count.
- For 'b', if there's an 'a' available, remove "ab" and add points; otherwise, increment 'b' count.
- For other characters, calculate points for any remaining "ba" pairs and reset counters.
- After iteration, calculate points for any remaining "ba" pairs.
- Return the total points.

# Complexity
- Time complexity: O(n)
We iterate through the string once, performing constant-time operations for each character.

- Space complexity: O(n)
We use additional space to store the reversed string in the worst case (when y > x). Otherwise, the space complexity is O(1) as we only use a few variables to keep track of counts and points.

# Code
```
(define/contract (maximum-gain s x y)
  (-> string? exact-integer? exact-integer? exact-integer?)
  
  (define (reverse-string str)
    (list->string (reverse (string->list str))))
  
  (let* ([s (if (< x y) (reverse-string s) s)]
         [x-points (max x y)]
         [y-points (min x y)]
         [a-count 0]
         [b-count 0]
         [total-points 0])
    
    (define (process-char c)
      (cond
        [(char=? c #\\a) (set! a-count (add1 a-count))]
        [(char=? c #\\b)
         (if (> a-count 0)
             (begin
               (set! a-count (sub1 a-count))
               (set! total-points (+ total-points x-points)))
             (set! b-count (add1 b-count)))]
        [else
         (let ([ba-points (* (min b-count a-count) y-points)])
           (set! total-points (+ total-points ba-points))
           (set! a-count 0)
           (set! b-count 0))]))
    
    (for-each process-char (string->list s))
    
    (set! total-points (+ total-points (* (min b-count a-count) y-points)))
    
    total-points))
```