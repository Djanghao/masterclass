# Python - 2 pointer/sliding window

**Author:** Ante_
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5954573/](https://leetcode.com/problems/count-substrings-with-k-frequency-characters-ii/solutions/5954573/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(1)$$ - number of chars - max 26

```
class Solution:
    def numberOfSubstrings(self, s, k):
        res, start, count = 0, 0, Counter()
        for end, c in enumerate(s):
            count[c] += 1
            while count[c] == k:
                res += len(s) - end
                count[s[start]] -= 1
                start += 1
        return res        
```