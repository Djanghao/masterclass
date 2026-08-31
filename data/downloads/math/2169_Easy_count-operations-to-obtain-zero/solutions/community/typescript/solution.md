# JS Solution

**Author:** longpt
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/3758098/](https://leetcode.com/problems/count-operations-to-obtain-zero/solutions/3758098/)

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
```
function countOperations(num1: number, num2: number): number {
    let totalCountOperations = 0;

    if (num1 === 0 || num2 === 0) {
        return totalCountOperations
    }

    if (num1 > num2) {
        return totalCountOperations + 1 + countOperations(num1 - num2,num2)
    }

    return totalCountOperations + 1 + countOperations(num1, num2 - num1)
};
```