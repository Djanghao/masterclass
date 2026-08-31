# sliding window, O(n) || Typescript

**Author:** HarlanTheEngineer
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4953936/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/4953936/)

---

# Intuition
equivalent to problem `Find longest subArray that sums to target k`

# Approach
Since we are only removing numbers from either from front of array or end of array, which means, for all the nums left in nums after the operations, they are of one contigorous subarray which sums to `target` where `target` equals to the total sum of nums minus `x`, the new problem we now need to sovle is `Find longest subArray that sums to target k`, which is traight forward textbook sliding window.

# Complexity
- Time complexity:
$$O(n)$$ 

- Space complexity:
$$O(1)$$ 

# Code
```
function minOperations(nums: number[], x: number): number {
    const target: number = nums.reduce((a, c) => a + c) - x
    let left: number = 0
    let right: number = 0
    let maxValidArrayLength: number = -1
    let curSum: number = 0

    while (right < nums.length) {
        curSum += nums[right]

        while (curSum > target) {
            curSum -= nums[left]
            left++
        }

        if (curSum === target) {
            maxValidArrayLength = Math.max(maxValidArrayLength, right - left + 1)
        }
        right++
    }

    if (maxValidArrayLength === -1) {
        return maxValidArrayLength
    }
    return nums.length - maxValidArrayLength
};

```