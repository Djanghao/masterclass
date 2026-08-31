# Racket Solution

**Author:** nerasnow
**Votes:** 0
**Link:** [https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372741/](https://leetcode.com/problems/largest-odd-number-in-string/solutions/4372741/)

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
(define/contract (largest-odd-number num)
  (-> string? string?)
  (list->string (reverse (recur (reverse (string->list num))))))

(define/contract (recur lst)
(-> (listof char?) (listof char?))
    (cond
      [(empty? lst) empty]
      [(= (remainder (char->integer (first lst)) 2) 0) (recur (rest lst))]
      [else lst]))
```