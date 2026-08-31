# 2587: Solution with step by step explanation

**Author:** Marlen09
**Votes:** 9
**Link:** [https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286416/](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/solutions/3286416/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. Define a function maxScore that takes a list of integers nums as input and returns an integer.
2. Sort the input list nums in descending order.
3. Initialize a list prefix_sums with a single element 0.
4. Loop through the sorted list nums and compute the prefix sums, appending each sum to the list prefix_sums.
5. Initialize a variable max_score to 0.
6. Loop through the indices from 1 to the length of prefix_sums:
a. If the current prefix sum is greater than 0, update max_score to the current index.
7. Return max_score.

# Complexity
- Time complexity:
O(n log n)

- Space complexity:
O(n),

# Code
```
class Solution:
    def maxScore(self, nums: List[int]) -> int:
        nums.sort(reverse=True)
        prefix_sums = [0]
        for num in nums:
            prefix_sums.append(prefix_sums[-1] + num)
        max_score = 0
        for i in range(1, len(prefix_sums)):
            if prefix_sums[i] > 0:
                max_score = i
        return max_score

```