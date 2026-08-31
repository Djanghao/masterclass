# Python simple approach. Expand around each number to find the interval

**Author:** sonofantonv2
**Votes:** 20
**Link:** [https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107304/](https://leetcode.com/problems/data-stream-as-disjoint-intervals/solutions/3107304/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Construct the interval by expanding around each of the added numbers. 

# Complexity
- Time complexity: __O(N)__ for getIntervals, __O(1)__ for addNum
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: __O(N)__ for getIntervals, __O(1)__ for addNum
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SummaryRanges:

    def __init__(self):
        self.nums = set()

    def addNum(self, value: int) -> None:
        self.nums.add(value)

    def getIntervals(self) -> List[List[int]]:
        intervals = []
        seen = set()
        for num in self.nums:
            if num in seen: 
                continue

            left = num
            while left - 1 in self.nums:
                left -= 1
                seen.add(left)

            right = num
            while right + 1 in self.nums:
                right += 1
                seen.add(right)
            
            intervals.append([left, right])
        return sorted(intervals)

# Your SummaryRanges object will be instantiated and called as such:
# obj = SummaryRanges()
# obj.addNum(value)
# param_2 = obj.getIntervals()
```