# 双指针slide window

**Author:** Minbeter
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-duplicate-substring/solutions/3546101/](https://leetcode.com/problems/longest-duplicate-substring/solutions/3546101/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Define left and right double pointers, treat the area of double pointers as a sliding window, at first the sliding window contains only the leftmost element in the string, judge when the element exists in the remaining substring, if it exists, move the right pointer one position to the right, so that the sliding window contains two elements, continue to judge, if it still exists, continue to perform the above operation.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
class Solution:
    def longestDupSubstring(self, s: str) -> str:
        left = 0
        right = 1
        res = ""
        n = len(s)
        while right<n:
            if s[left:right] in s[left+1:]:
                if right - left > len(res):
                    res = s[left:right]
                right+=1
                continue
            left+=1
            if left == right:
                right+=1
        return res
```