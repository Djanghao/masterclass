# Using map and apply

**Author:** user2687Pd
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3124468/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3124468/)

---

# Intuition
Split sentences and count words

# Approach
Used `map` to split sentences and count words, then find maximum value using `apply max`.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
(define/contract (most-words-found sentences)
  (-> (listof string?) exact-integer?)
    (apply max (map (lambda (x) (length(string-split x " "))) sentences))
  )
```