# Most intuitive approach, doesn't even go through the whole array

**Author:** B4aVvFdAcE
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/6124113/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/6124113/)

---

# Intuition
Note that once you find the start and the end of the required subsequence, you don't really care about what happens in the middle.

# Approach
We start from the beginning of the array, get rid of the sorted elements.  And then, we start from the end of the array, and get rid of the sorted elements.  What's remaining is the solution.

# Complexity
- Time complexity:
$$O(n)$$.  Two sweeps.

- Space complexity:
$$O(1)$$, assuming we can mutate the original array.

# Code
```typescript []
function findUnsortedSubarray(nums: number[]): number {
    const window = [...nums];

    while (window[0] == Math.min(...window)) {
        window.shift();
    }

    while (window[window.length - 1] == Math.max(...window)) {
        window.pop();
    }

    return window.length;
};
```