# Python Elegant & Short

**Author:** Kyrylo-Ktl
**Votes:** 3
**Link:** [https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/3372119/](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/solutions/3372119/)

---

# Complexity
- Time complexity: $$O(n^{2})$$
- Space complexity: $$O(n)$$

# Code
```
class Solution:
    def lenLongestFibSubseq(self, arr: List[int]) -> int:
        nums = set(arr)
        longest = 0

        for i in range(len(arr)):
            for j in range(i + 1, len(arr)):
                a, b = arr[i], arr[j]
                length = 2

                while a + b in nums:
                    a, b = b, a + b
                    length += 1

                if length > 2 and length > longest:
                    longest = length

        return longest
```