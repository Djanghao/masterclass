# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/6133603/](https://leetcode.com/problems/find-the-k-or-of-an-array/solutions/6133603/)

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
public int findKOr(int[] nums, int k) {
    int result = 0;

    // Iterate over each bit position (0 to 31 for a 32-bit integer)
    for (int bit = 0; bit < 32; bit++) {
        int count = 0;

        // Count how many numbers have the current bit set
        for (int num : nums) {
            if ((num & (1 << bit)) != 0) {
                count++;
            }
        }

        // If the bit is set in at least k numbers, set it in the result
        if (count >= k) {
            result |= (1 << bit);
        }
    }

    return result;
}
```
```javascript []
var findKOr = function(nums, k) {
    let result = 0;

    // Iterate over each bit position (0 to 31 for a 32-bit integer)
    for (let bit = 0; bit < 32; bit++) {
        let count = 0;

        // Count how many numbers have the current bit set
        for (let num of nums) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }

        // If the bit is set in at least k numbers, set it in the result
        if (count >= k) {
            result |= (1 << bit);
        }
    }

    return result;
};
```
```typescript []
function findKOr(nums: number[], k: number): number {
    let result = 0;

    // Iterate over each bit position (0 to 31 for a 32-bit integer)
    for (let bit = 0; bit < 32; bit++) {
        let count = 0;

        // Count how many numbers have the current bit set
        for (let num of nums) {
            if ((num & (1 << bit)) !== 0) {
                count++;
            }
        }

        // If the bit is set in at least k numbers, set it in the result
        if (count >= k) {
            result |= (1 << bit);
        }
    }

    return result;
};
```