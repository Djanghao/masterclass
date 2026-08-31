# [Python3] Sort the separators, O(n log n), 2 lines

**Author:** Unwise
**Votes:** 37
**Link:** [https://leetcode.com/problems/put-marbles-in-bags/solutions/3111583/](https://leetcode.com/problems/put-marbles-in-bags/solutions/3111583/)

---

# Intuition
All of our bags are continuous slices of the array and all marbles must be in a bag and all bags are nonempty, so we're constructing a partition of the array with k slices and summing the first and last element of each slice.

No matter what, the first element of the array will count in the first slice and the last element of the array will count in the last slice.

Otherwise, we can think of our k slices as adding k - 1 separators to the array, where a separators is placed between index i and index i + 1 and adds the value at both indices to the overall score (since the former will be the last element of the previous slice and the latter will be the last element of the next one). The maximal partition will use the k - 1 separators that have the largest sum and the minimal solution will use the k - 1 separators that have the smallest sum.

# Approach
Find the value of each separator, sort them, and take the largest k - 1 and subtract the smallest k - 1. We don't have to care about the value of the first index and the value of the last index, since they are present in both the maximal and minimal partition.


# Code
```
class Solution:
    def putMarbles(self, w: List[int], k: int) -> int:
        p = sorted([w[i] + w[i + 1] for i in range(len(w) - 1)])
        return sum(p[len(p) - k + 1:]) - sum(p[:k - 1])
```