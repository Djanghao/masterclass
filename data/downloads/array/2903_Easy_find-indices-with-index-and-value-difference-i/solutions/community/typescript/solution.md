# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/6120596/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/6120596/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
public int[] findIndices(int[] nums, int indexDifference, int valueDifference) {
    int n = nums.length;

    // Iterate through all pairs of indices (i, j)
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            // Check if the conditions are satisfied
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return new int[] {i, j};
            }
        }
    }

    // If no such indices are found, return [-1, -1]
    return new int[] {-1, -1};
}
```
```javascript []
var findIndices = function(nums, indexDifference, valueDifference) {
    const n = nums.length;

    // Iterate through all pairs of indices (i, j)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if the conditions are satisfied
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j];
            }
        }
    }

    // If no such indices are found, return [-1, -1]
    return [-1, -1];
};
```
```typescript []
function findIndices(nums: number[], indexDifference: number, valueDifference: number): number[] {
    const n = nums.length;

    // Iterate through all pairs of indices (i, j)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Check if the conditions are satisfied
            if (Math.abs(i - j) >= indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j];
            }
        }
    }

    // If no such indices are found, return [-1, -1]
    return [-1, -1];
};
```