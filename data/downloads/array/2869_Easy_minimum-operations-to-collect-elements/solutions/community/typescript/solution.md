# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/6093412/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/6093412/)

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
public int minOperations(List<Integer> nums, int k) {
    Set<Integer> collected = new HashSet<>();
    int operations = 0;

    // Start from the end of the array and collect elements
    for (int i = nums.size() - 1; i >= 0; i--) {
        int num = nums.get(i);
        if (num <= k) {
            collected.add(num);
        }
        operations++;

        // Check if all elements from 1 to k are collected
        if (collected.size() == k) {
            break;
        }
    }

    return operations;
}
```
```javascript []
var minOperations = function(nums, k) {
    const collected = new Set();
    let operations = 0;

    // Iterate from the end of the array
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            collected.add(nums[i]);
        }
        operations++;

        // Check if all elements from 1 to k are collected
        if (collected.size === k) {
            break;
        }
    }

    return operations;
};
```
```typescript []
function minOperations(nums: number[], k: number): number {
    const collected: Set<number> = new Set();
    let operations = 0;

    // Iterate from the end of the array
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] <= k) {
            collected.add(nums[i]);
        }
        operations++;

        // Check if all elements from 1 to k are collected
        if (collected.size === k) {
            break;
        }
    }

    return operations;
};
```