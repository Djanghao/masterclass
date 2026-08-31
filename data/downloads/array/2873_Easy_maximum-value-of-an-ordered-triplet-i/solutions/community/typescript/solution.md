# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/6093439/](https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/solutions/6093439/)

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
public long maximumTripletValue(int[] nums) {
    int n = nums.length;
    long maxValue = 0;

    // Iterate through all possible triplets (i, j, k) where i < j < k
    for (int i = 0; i < n - 2; i++) {
        for (int j = i + 1; j < n - 1; j++) {
            for (int k = j + 1; k < n; k++) {
                // Calculate the triplet value
                long value = (long) (nums[i] - nums[j]) * nums[k];
                // Update the maximum value
                maxValue = Math.max(maxValue, value);
            }
        }
    }

    return maxValue;
}
```
```javascript []
var maximumTripletValue = function(nums) {
    let maxValue = 0;
    const n = nums.length;

    // Iterate through all possible triplets (i, j, k) where i < j < k
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                // Calculate the triplet value
                const value = (nums[i] - nums[j]) * nums[k];
                // Update the maximum value
                maxValue = Math.max(maxValue, value);
            }
        }
    }

    return maxValue;
};
```
```typescript []
function maximumTripletValue(nums: number[]): number {
    let maxValue = 0;
    const n = nums.length;

    // Iterate through all possible triplets (i, j, k) where i < j < k
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                // Calculate the triplet value
                const value = (nums[i] - nums[j]) * nums[k];
                // Update the maximum value
                maxValue = Math.max(maxValue, value);
            }
        }
    }

    return maxValue;
};
```