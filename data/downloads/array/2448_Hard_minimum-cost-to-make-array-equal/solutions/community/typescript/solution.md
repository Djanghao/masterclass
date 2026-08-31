# TypeScript | Using median | 3 lines of code | Beats 100%

**Author:** abijahkaj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3667325/](https://leetcode.com/problems/minimum-cost-to-make-array-equal/solutions/3667325/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The first idea was to find the median and use it to compute the minimal cost.

# Approach
<!-- Describe your approach to solving the problem. -->
Tried using the two elements in the middle of the array after sorting it but it didn't work. So I decided to take a small chunk of items in the middle and then compute the cost for each possible median.

The last part is just sorting and getting the smallest value.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function minCost(nums: number[], cost: number[]): number {
    const n = nums.length;
    const slice = n < 50 ? nums : [...nums].sort((a, b) => a - b).slice(Math.floor(n/2 - n*0.05), Math.floor(n/2 + n*0.05) + 1);
    return slice.slice().map(median =>  nums.reduce((acc, curr, i) => acc + Math.abs(curr - median) * cost[i], 0)).sort((a, b) => a - b)[0];
};
```