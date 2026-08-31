# Racket stream combinations

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/combination-sum-iii/solutions/4072167/](https://leetcode.com/problems/combination-sum-iii/solutions/4072167/)

---

# Approach
Here is an alternative approach that uses streams

# Code
```
(define (combination-sum3 k n)
  (sequence->list
   (sequence-filter (\u03BB (ls) (equal? n (apply + ls)))
                    (in-combinations (range 1 10) k))))

```