# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/6120741/](https://leetcode.com/problems/minimum-sum-of-mountain-triplets-i/solutions/6120741/)

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
public int minimumSum(int[] nums) {
    int n = nums.length;
    int minSum = Integer.MAX_VALUE;
    boolean hasMountain = false;

    // Iterate through the middle element of the triplet (j)
    for (int j = 1; j < n - 1; j++) {
        int leftMin = Integer.MAX_VALUE;
        int rightMin = Integer.MAX_VALUE;

        // Find the smallest valid i (nums[i] < nums[j]) to the left of j
        for (int i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                leftMin = Math.min(leftMin, nums[i]);
            }
        }

        // Find the smallest valid k (nums[k] < nums[j]) to the right of j
        for (int k = j + 1; k < n; k++) {
            if (nums[k] < nums[j]) {
                rightMin = Math.min(rightMin, nums[k]);
            }
        }

        // If valid i and k are found, calculate the mountain triplet sum
        if (leftMin != Integer.MAX_VALUE && rightMin != Integer.MAX_VALUE) {
            hasMountain = true;
            int currentSum = leftMin + nums[j] + rightMin;
            minSum = Math.min(minSum, currentSum);
        }
    }

    // Return the minimum sum if a mountain triplet exists, otherwise -1
    return hasMountain ? minSum : -1;
}
```
```javascript []
var minimumSum = function(nums) {
    const n = nums.length;
    let minSum = Infinity;
    let hasMountain = false;

    // Iterate through the middle element of the triplet (j)
    for (let j = 1; j < n - 1; j++) {
        let leftMin = Infinity;
        let rightMin = Infinity;

        // Find the smallest valid i (nums[i] < nums[j]) to the left of j
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                leftMin = Math.min(leftMin, nums[i]);
            }
        }

        // Find the smallest valid k (nums[k] < nums[j]) to the right of j
        for (let k = j + 1; k < n; k++) {
            if (nums[k] < nums[j]) {
                rightMin = Math.min(rightMin, nums[k]);
            }
        }

        // If valid i and k are found, calculate the mountain triplet sum
        if (leftMin !== Infinity && rightMin !== Infinity) {
            hasMountain = true;
            const currentSum = leftMin + nums[j] + rightMin;
            minSum = Math.min(minSum, currentSum);
        }
    }

    // Return the minimum sum if a mountain triplet exists, otherwise -1
    return hasMountain ? minSum : -1;
};
```
```typescript []
function minimumSum(nums: number[]): number {
    const n = nums.length;
    let minSum = Infinity;
    let hasMountain = false;

    // Iterate through the middle element of the triplet (j)
    for (let j = 1; j < n - 1; j++) {
        let leftMin = Infinity;
        let rightMin = Infinity;

        // Find the smallest valid i (nums[i] < nums[j]) to the left of j
        for (let i = 0; i < j; i++) {
            if (nums[i] < nums[j]) {
                leftMin = Math.min(leftMin, nums[i]);
            }
        }

        // Find the smallest valid k (nums[k] < nums[j]) to the right of j
        for (let k = j + 1; k < n; k++) {
            if (nums[k] < nums[j]) {
                rightMin = Math.min(rightMin, nums[k]);
            }
        }

        // If valid i and k are found, calculate the mountain triplet sum
        if (leftMin !== Infinity && rightMin !== Infinity) {
            hasMountain = true;
            const currentSum = leftMin + nums[j] + rightMin;
            minSum = Math.min(minSum, currentSum);
        }
    }

    // Return the minimum sum if a mountain triplet exists, otherwise -1
    return hasMountain ? minSum : -1;
};
```