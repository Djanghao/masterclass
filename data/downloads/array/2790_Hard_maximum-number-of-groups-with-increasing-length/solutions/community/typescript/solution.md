# ✅7 lines of clean and optimize code | simple explanation

**Author:** SumitPokhriyal
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3803796/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3803796/)

---

# Intuition
The given function maxIncreasingGroups takes an array of integers usageLimits as input. Each element in the array represents the maximum allowed usage limit for a particular group. The function aims to find the maximum number of groups that can be formed, where the usage limits for each group follow an increasing pattern.

# Approach
To solve this problem, we first sort the usageLimits array in ascending order. We then initialize two variables: total to keep track of the cumulative sum of usage limits, and count to store the maximum number of groups that can be formed.

We use a reduce function to iterate through the sorted usageLimits array. In each iteration, we add the current limit to the total and check if the total has reached or exceeded the triangular number of the count + 1. The triangular number of n is calculated as (n * (n + 1)) / 2. If the condition is met, we increment the count.

By the end of the iteration, the count variable will contain the maximum number of groups that can be formed.

# Complexity
- Time complexity: The time complexity of this approach is O(n log n) due to the sorting step, where n is the length of the input array usageLimits. The reduce function adds a linear time complexity of O(n), but it is dominated by the sorting step.
- Space complexity: The space complexity is O(1) as we are using a constant amount of additional space to store the total and count variables.

# Code
```
function maxIncreasingGroups(usageLimits: number[]): number {
  let total = 0, count = 0; usageLimits.sort((a, b) => a - b);
  const calculateTriangularNumber = (n:number) => (n * (n + 1)) / 2;
  usageLimits.reduce((acc:number, limit:number) => {
    total += limit;
    if (total >= calculateTriangularNumber(count + 1))count++;
    return total;
  }, 0);
  return count;
};
```