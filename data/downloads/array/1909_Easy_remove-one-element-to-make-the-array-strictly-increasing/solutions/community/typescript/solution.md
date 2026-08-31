# 🚀⚡️ StrictlyIncreasing: 100% Fast with Just One Cut! ⚡️🚀

**Author:** seba1337
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5990120/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/5990120/)

---

# Intuition
The task is to determine if an array can become strictly increasing by removing **exactly one** element. A strictly increasing array requires each element to be greater than the previous one. Therefore, if there exists a "peak" (where a value is greater than or equal to the next), we can try removing either that element or the following one to check if it resolves the issue. If removing one of them results in a strictly increasing array, the answer is `true`.

# Approach
1. Define a helper function `helper(nums: number[])` that checks if an array is strictly increasing by iterating through it and ensuring `nums[i-1] < nums[i]` for all elements.

2. In `canBeIncreasing(nums: number[])`, loop through the array and check if each element is greater than the next. If an element `nums[i-1] >= nums[i]` is found:
-- Try removing `nums[i-1]` and check if the resulting array is strictly increasing using the `helper` function.
-- If the check fails, try removing `nums[i]` instead.
-- If either of these modifications produces a strictly increasing array, return true.
3. If the loop completes without finding any element that needs to be removed, return `true` (since the array is already strictly increasing).

# Complexity
- Time complexity: `O(n)\xB2`because we may check for strictness in an `O(n)` loop up to times.
Space Complexity: `O(n)` due to the array slicing when making a copy of the input array for testing.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
![image.png](./images/0.png)


# Code
```typescript []
const helper = (nums: number[]) => {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i])
            return false

    }

    return true;
}

function canBeIncreasing(nums: number[]): boolean {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] >= nums[i]) {
            const sliced = [...nums]
            sliced.splice(i - 1, 1);
            
            if (helper(sliced))
                return true
            else {
                const sliced = [...nums]
                sliced.splice(i, 1);

                return helper(sliced);
            }
        }
    }

    return true
};
```