# Two simple Python solutions with explanation

**Author:** sun_day
**Votes:** 56
**Link:** [https://leetcode.com/problems/non-overlapping-intervals/solutions/622135/](https://leetcode.com/problems/non-overlapping-intervals/solutions/622135/)

---

# Solution 1: sort by starting time

Logic:
1. Attend the one with smaller start time first
2. (Greedy) Remove the one with bigger end time if overlapping occurs (because it will always incur more overlappings in the remaining array with asceding order of start time)

Example:
```
[[1,10], [2,3], [3,4], [5,6]]
```
First, we attend ```[1,10]```
Next, ```[2,3]``` overlaps with ```[1,10]``` as 3 < 10. Here, we are going to remove ```[1,10]``` as it would definitely produce more overlappings as we continue the iteration.
Thirdly, attend ```[3,4]```
Last, attend ```[5,6]```

Code:
```python
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort()
        prev = float("-inf")
        ans = 0
        for i in intervals:
            if i[0] >= prev:
                prev = i[1]
            else:
                ans += 1
                prev = min(prev, i[1])
        return ans
```
# Solution 2: sort by ending time
If we think more clearly, the first solution can be improved slightly (save a line of code) by sorting the intervals with end time. Why? Becuase the greedy nature remains true even if we the remaining array is not sorted by start time. Meanwhile, if we sort them by end time and if overlap occurs, the interval that comes later must be the one to remove as it has larger end time. Take a look at the following example.

Example:
### 1) sort by start time
Extra procedure: after comparing [1,10] and [2,3], we have to choose which one to remove by comparing the end time
```
[[1,10], [2,3], [3,4], [5,6]]
```

### 2) sort by end time
Saved procedure: after comparing [5, 6] and [1,10], we immediately can remove the later one which is [1,10] as it must produce more overlaps in the following, i.e. with [6,11] and [9,12]
```
[[2,3], [3,4], [5,6], [1,10], [6, 11], [9, 12]]
```

Code:
```python
    def eraseOverlapIntervals(self, intervals: List[List[int]]) -> int:
        intervals.sort(key=lambda x:x[1])
        prev = float("-inf")
        ans = 0
        for i in intervals:
            if i[0] >= prev:
                prev = i[1]
            else:
                ans += 1
        return ans
```