# Python, binary search on the length of the subsequence

**Author:** blue_sky5
**Votes:** 25
**Link:** [https://leetcode.com/problems/maximum-repeating-substring/solutions/952687/](https://leetcode.com/problems/maximum-repeating-substring/solutions/952687/)

---

```
class Solution:
    def maxRepeating(self, sequence: str, word: str) -> int:
        if word not in sequence:
            return 0

        left = 1
        right = len(sequence) // len(word)
        while left <= right:
            mid = (left + right) // 2
            if word * mid in sequence:
                left = mid + 1
            else:
                right = mid - 1 
                
        return left - 1
```