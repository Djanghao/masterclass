# Easy solution with steps

**Author:** shamnad_skr
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5979725/](https://leetcode.com/problems/find-lucky-integer-in-an-array/solutions/5979725/)

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
```typescript []
function findLucky(arr: number[]): number {

    let frequency = new Map();
    
    // Count the frequency of each number
    for (let num of arr) {
        frequency.set(num, (frequency.get(num) || 0) + 1);
    }

    let maxLucky = -1;
    
    // Find the largest lucky number
    for (let [num, count] of frequency.entries()) {
        if (num === count) {
            maxLucky = Math.max(maxLucky, num);
        }
    }
    
    return maxLucky;
    
};
```