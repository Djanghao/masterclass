# Straightforward method

**Author:** zanbin2046python
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5939018/](https://leetcode.com/problems/minimize-connected-groups-by-inserting-interval/solutions/5939018/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. the given intervals might be combined first 
2. the optimize case is to add new interval from the end of some intervals, and hope the end of this newly added interval can extend and covers the most existing intervals.

# Approach
<!-- Describe your approach to solving the problem. -->
1. we first sort intervals and combine them as much possbile 
2. store all valid ends into a sorted list as well as all valid starts.
3. loops through all ends, and add k to each end, and check how many intervals it can cover though binary search. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(nlogn) where n is the lenght of the intervals 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)

# Code
```python3 []
class Solution:
    def minConnectedGroups(self, intervals: List[List[int]], k: int) -> int:
        intervals.sort()
        ends = [intervals[0][1]]
        stas = [intervals[0][0]]
        for interval in intervals[1:]:
            if interval[0]>ends[-1]:
                stas.append(interval[0])
                ends.append(interval[1])
            elif interval[1]>ends[-1]:
                ends[-1]=interval[1]
        skip = 0
        for i, end in enumerate(ends):
            idx = bisect.bisect(stas, end+k)-1
            skip=max(skip, idx-i)
        return len(ends)-skip
```