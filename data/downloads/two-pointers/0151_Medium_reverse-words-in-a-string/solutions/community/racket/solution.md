# simple

**Author:** dr-neptune
**Votes:** 0
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string/solutions/3960048/](https://leetcode.com/problems/reverse-words-in-a-string/solutions/3960048/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
(define (reverse-words s)
  (string-join (reverse (string-split s))))
```