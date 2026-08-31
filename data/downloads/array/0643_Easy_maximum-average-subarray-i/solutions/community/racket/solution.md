# racket sliding window

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-subarray-i/solutions/3998781/](https://leetcode.com/problems/maximum-average-subarray-i/solutions/3998781/)

---

# Approach 
We iterate through the list at a distance k apart. Starting with the summation of the first k values, we move through the list removing the first value from the initial list and adding the next value from the rest of the list. When the rest of the list is empty, return the maximum sum divided by k.

Here is a printout of first-vals rest-vals prev-val max-val window-sum:

(9 7 3 5 6 2 0 8 1 9) (0 8 1 9) 32 32 23
(7 3 5 6 2 0 8 1 9) (8 1 9) 23 32 24
(3 5 6 2 0 8 1 9) (1 9) 24 32 22
(5 6 2 0 8 1 9) (9) 22 32 26
(6 2 0 8 1 9) () 26 32 16/3

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define (find-max-average nums k)
  (define initial-sum (apply + (take nums k)))
  (let loop ([first-vals nums]
             [rest-vals (drop nums k)]
             [prev-val initial-sum]
             [max-val initial-sum])
    (match rest-vals
      ['() (/ max-val k)]
      [_ (let ([window-sum (+ (- prev-val (first first-vals)) (first rest-vals))])
           (if (> window-sum max-val)
               (loop (rest first-vals) (rest rest-vals) window-sum window-sum)
               (loop (rest first-vals) (rest rest-vals) window-sum max-val)))])))
```