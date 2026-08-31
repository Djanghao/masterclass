# [Python3]  Binary Search - clean, easy to understand

**Author:** dolong2110
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/3325574/](https://leetcode.com/problems/maximum-font-to-fit-a-sentence-in-a-screen/solutions/3325574/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# """
# This is FontInfo's API interface.
# You should not implement it, or speculate about its implementation
# """
#class FontInfo(object):
#    Return the width of char ch when fontSize is used.
#    def getWidth(self, fontSize, ch):
#        """
#        :type fontSize: int
#        :type ch: char
#        :rtype int
#        """
# 
#    def getHeight(self, fontSize):
#        """
#        :type fontSize: int
#        :rtype int
#        """
class Solution:
    def maxFont(self, text: str, w: int, h: int, fonts: List[int], fontInfo : 'FontInfo') -> int:
        def helper(font: int) -> bool:
            if fontInfo.getHeight(font) > h:
                return False
            
            width = 0
            for ch in text:
                width += fontInfo.getWidth(font, ch)
            return width <= w
        
        l, r = 0, len(fonts) - 1
        while l <= r:
            m = (l + r) >> 1
            if helper(fonts[m]):
                l = m + 1
            else:
                r = m - 1
        return fonts[r] if r >= 0 else -1
```