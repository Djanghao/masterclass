# TS/JS. minimalistic while loop solution (\w explanation)

**Author:** a_deev
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5414627/](https://leetcode.com/problems/maximum-number-of-operations-with-the-same-score-i/solutions/5414627/)

---

# Intuition
The constraint `2 <= nums.length <= 100` assures us that there is at least one valid pair. So we start with `res = 1` and `score` as the number with which we will compare other pairs.
In addition, since we are comparing the sum \u200B\u200Bof pairs with a number, we do not need to worry that the value can be `NaN`.
In this approach there is always one redundant iteration, because there is no quit from loop depending on remaining elements (it looks bad but the code is a bit shorter \u30B7).

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

# Code
```
function maxOperations(nums: number[]): number {
    let res = 1;
    let i = 0;
    const score = nums[i++] + nums[i++];

    while (nums[i++] + nums[i++] === score) res++;
    return res;
};

```