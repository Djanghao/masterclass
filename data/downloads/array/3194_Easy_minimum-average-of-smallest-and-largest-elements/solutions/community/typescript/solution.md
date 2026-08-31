# Math.min, Array.sort

**Author:** emiliodeg
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5369328/](https://leetcode.com/problems/minimum-average-of-smallest-and-largest-elements/solutions/5369328/)

---

# Intuition
Sorting, and then calculate avg. It isn't neecesary track avegerates, only the smallest.

# Complexity
- Time complexity: $$O(n / 2)$$
- Space complexity: $$O(1)$$

# Code
```
function minimumAverage(nums: number[]): number {
    nums.sort((a, b) => a - b)

    let min = 50

    for (let i = 0; i < Math.ceil(nums.length / 2); i++) {
        const avg = (nums[i] + nums[nums.length - 1 - i]) / 2
        min = Math.min(min, avg)
    }

    return min
};
```