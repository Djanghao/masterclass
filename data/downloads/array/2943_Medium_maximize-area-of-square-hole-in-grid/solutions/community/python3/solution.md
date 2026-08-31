# I hate the description

**Author:** vudat1710
**Votes:** 14
**Link:** [https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328944/](https://leetcode.com/problems/maximize-area-of-square-hole-in-grid/solutions/4328944/)

---

# Intuition
Although I managed to get this question right in the end, I was still so frustrated first time reading this question. Basically, all the bars from 1 -> n+2 (horizontal) and 1 -> m+2 (vertical) are **ALREADY THERE**. Your job is to choose some bars from hBars and vBars and remove it out so that it creates a hole **(no bars inbetween)** with maximum area.

# Approach
***The idea is basically similar to this problem: https://leetcode.com/problems/longest-consecutive-sequence/description/. Please do it first so you can get the idea***

In order to create a hole, all the removed bars need to be *consecutive bars*. If 3 consecutive horizontal bars and 3 consecutive vertical bars are removed, it will create a hole with the area of 4^2=16 (if you find it hard to understand, draw an example and you can figure it out easily). So the job here is clear: you need to find the maximum number of consecutive elements in each side of the rectangle. Our result will be (min(maxConsecutiveHorizontal, maxConsecutiveVertical) + 1)^2. For example, if you're about to remove 2 consecutive bars horizontally and 3 vertically, the area of the hole you received is (min(2, 3) + 1)^2=9.
- Use the technique in the mentioned problem to get the maximum number of consecutive elements in hBars and vBars.
- Calculate and return the result

# Complexity
- Time complexity: O(max(len(hBars), len(vBars))) -> O(1) (len(hBars) <= 100 and len(vBars) <= 100)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(len(hBars)+len(vBars)) -> O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximizeSquareHoleArea(self, n: int, m: int, hBars: List[int], vBars: List[int]) -> int:
        def findLongestConsecutiveElements(numsSet):
            res = 1
            for num in numsSet:
                count = 1
                current = num
                while current+1 in numsSet:
                    current += 1
                    count += 1
                res = max(res, count)
            return res
            
        res = 1
        if len(hBars) == 0 or len(vBars) == 0: return 1
        hSet, vSet = set(hBars), set(vBars)
        maxHBars, maxVBars = findLongestConsecutiveElements(hSet), findLongestConsecutiveElements(vSet)
        return (min(maxHBars, maxVBars) + 1) ** 2
```