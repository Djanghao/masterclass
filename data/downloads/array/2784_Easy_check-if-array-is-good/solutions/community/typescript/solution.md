# Java&JS&TS Solution (JW)

**Author:** specter01wj
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-array-is-good/solutions/6039977/](https://leetcode.com/problems/check-if-array-is-good/solutions/6039977/)

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
public boolean isGood(int[] nums) {
    int n = nums.length - 1; // Expected maximum element n
    int[] count = new int[n + 1];

    // Count the occurrences of each number
    for (int num : nums) {
        if (num > n) {
            return false; // Any number greater than n makes it invalid
        }
        count[num]++;
    }

    // Check that each number from 1 to n-1 appears exactly once
    for (int i = 1; i < n; i++) {
        if (count[i] != 1) {
            return false;
        }
    }

    // Check that n appears exactly twice
    return count[n] == 2;
}
```
```javascript []
var isGood = function(nums) {
    const n = nums.length - 1; // Expected maximum element n
    const count = new Array(n + 1).fill(0);

    // Count the occurrences of each number
    for (const num of nums) {
        if (num > n) {
            return false; // Any number greater than n makes it invalid
        }
        count[num]++;
    }

    // Check that each number from 1 to n-1 appears exactly once
    for (let i = 1; i < n; i++) {
        if (count[i] !== 1) {
            return false;
        }
    }

    // Check that n appears exactly twice
    return count[n] === 2;
};
```
```typescript []
function isGood(nums: number[]): boolean {
    const n = nums.length - 1; // Expected maximum element n
    const count: number[] = new Array(n + 1).fill(0);

    // Count the occurrences of each number
    for (const num of nums) {
        if (num > n) {
            return false; // Any number greater than n makes it invalid
        }
        count[num]++;
    }

    // Check that each number from 1 to n-1 appears exactly once
    for (let i = 1; i < n; i++) {
        if (count[i] !== 1) {
            return false;
        }
    }

    // Check that n appears exactly twice
    return count[n] === 2;
};
```