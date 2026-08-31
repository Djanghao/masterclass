# The simplest Typescript solution.

**Author:** ArtemSkok
**Votes:** 0
**Link:** [https://leetcode.com/problems/ant-on-the-boundary/solutions/5902065/](https://leetcode.com/problems/ant-on-the-boundary/solutions/5902065/)

---

# Intuition
1. The ant is travelling back and forth on a single axis of coordinates.
2. The item in the input array represents an instruction for ant, and ant represents a cursor.
3. The "boundrary" represents 0 coordinate on the axis.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
In order for ant landing on the 0 position (the boundary) the sum of ant's all previous pathes should be 0.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```typescript []
function returnToBoundaryCount(nums: number[]): number {
    let sum = 0;
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum === 0) {
            result++;
        }
    }
    
    return result;
};
```