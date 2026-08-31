# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/6006972/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/6006972/)

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
public int findNonMinOrMax(int[] nums) {
    // If the array has fewer than 3 elements, return -1 since we can't have a middle element
    if (nums.length < 3) {
        return -1;
    }

    // Find the minimum and maximum values in the array
    int min = Integer.MAX_VALUE;
    int max = Integer.MIN_VALUE;
    for (int num : nums) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    // Return any number that is neither min nor max
    for (int num : nums) {
        if (num != min && num != max) {
            return num;
        }
    }

    return -1;
}
```
```javascript []
var findNonMinOrMax = function(nums) {
    // If the array has fewer than 3 elements, return -1 as we can't have a middle element
    if (nums.length < 3) {
        return -1;
    }

    // Find the minimum and maximum values in the array
    let min = Math.min(...nums);
    let max = Math.max(...nums);

    // Return any number that is neither min nor max
    for (let num of nums) {
        if (num !== min && num !== max) {
            return num;
        }
    }

    return -1;
};
```
```typescript []
function findNonMinOrMax(nums: number[]): number {
    // If the array has fewer than 3 elements, return -1 as we can't have a middle element
    if (nums.length < 3) {
        return -1;
    }

    // Find the minimum and maximum values in the array
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    // Return any number that is neither min nor max
    for (let num of nums) {
        if (num !== min && num !== max) {
            return num;
        }
    }

    return -1;
};
```