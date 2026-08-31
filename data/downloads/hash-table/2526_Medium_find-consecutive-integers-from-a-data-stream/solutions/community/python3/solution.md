# [Python3] Record the Last Index of non-Value Element in the Data Stream

**Author:** xil899
**Votes:** 6
**Link:** [https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015141/](https://leetcode.com/problems/find-consecutive-integers-from-a-data-stream/solutions/3015141/)

---

# Intuition
Checking the last `k` element in the Data Stream each time is computationally expensive and will get TLE. We need to come up with better algorithms.

# Approach
Given the objective of this problem, we don't need to (physically) maintain the full Data Stream, but just need to record the last index of the element not equal to the given `value` in the Data Stream.

# Complexity
- Time complexity of each operation: `O(1)`
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity of each operation: `O(1)`
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class DataStream:

    def __init__(self, value: int, k: int):
        self.value = value
        self.k = k
        self.currIdx = -1
        self.lastIdx = -1

    def consec(self, num: int) -> bool:
        self.currIdx += 1
        if num != self.value:
            self.lastIdx = self.currIdx
        return self.currIdx - self.lastIdx >= self.k


# Your DataStream object will be instantiated and called as such:
# obj = DataStream(value, k)
# param_1 = obj.consec(num)
```