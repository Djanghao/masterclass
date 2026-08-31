# 757: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 3
**Link:** [https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4198775/](https://leetcode.com/problems/set-intersection-size-at-least-two/solutions/4198775/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
```
        intervals.sort(key = lambda e: (e[1], -e[0]))
```

Here, we sort the intervals list based on two criteria:

Ascending order of the interval's end values (e[1]).
For intervals with the same end value, we sort by descending order of their start values (e[0]). This makes sure that the wider intervals come first.

```
        res = [intervals[0][1]-1, intervals[0][1]]
```

We initialize our result set res with the two largest numbers from the first interval after sorting.

```
        for e in intervals[1:]:
```
We iterate through the rest of the intervals.

```
            if res[-2] < e[0] and res[-1] >= e[0]:
                res.append(e[1])
```
For each interval, we first check if the last number in our result (res[-1]) is part of this interval and the second last number in our result (res[-2]) is not. If this is the case, we add the largest number of this interval (e[1]) to our result set.

```
            elif e[0] > res[-1]:
                res.extend([e[1]-1, e[1]])
```
If neither of the last two numbers in our result are in the current interval, we add the two largest numbers of this interval to our result set.

```
        return len(res)
```
Finally, we return the length of our result set, which represents the minimum number of numbers we need to pick.

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n)

# Code
```
class Solution:
    def intersectionSizeTwo(self, intervals: List[List[int]]) -> int:
        intervals.sort(key = lambda e: (e[1], -e[0]))

        res = [intervals[0][1]-1, intervals[0][1]]

        for e in intervals[1:]:

            if res[-2] < e[0] and res[-1] >= e[0]:
                res.append(e[1])

            elif e[0] > res[-1]:
                res.extend([e[1]-1, e[1]])

        return len(res)

```