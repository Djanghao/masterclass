# Typescript solution

**Author:** user8190rM
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/4371868/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/4371868/)

---

# Intuition
This problem can be narrowed down to finding the count of unique elements in an array (excluding element with a zero value).

# Approach
1. Create a set from an array.
2. Delete element with a value of 0.
3. Return the size of the set.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
function minimumOperations(nums: number[]): number {
    const set = new Set(nums);
    set.delete(0);
    return set.size;
};
```