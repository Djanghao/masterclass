# JavaScript O(n ** 2) DP

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5612140/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5612140/)

---

# Intuition
Use DP.
# Approach
Record and use the subresult of each index.
# Complexity
- Time complexity:
O(n ** 2)
- Space complexity:
O(n)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var validSubarraySplit = function(nums) {
    if (nums[0] === 1 || nums.at(-1) === 1)
        return -1

    const len = nums.length
    const table = new Array(len)


    function gcd(m, n) {
        if (m > n)  return gcd(n, m)
        if (m === 0)    return n
        return gcd(n % m, m)
    }


    function dp(fromIndex) {
        if (fromIndex === len)  return 0

        const val = nums[fromIndex]
        if (val === 1)  return Infinity

        const existing = table[fromIndex]
        if (existing !== undefined) return existing

        let result = Infinity
        for (let toIndex = fromIndex; toIndex < len; toIndex++) {
            const other = nums[toIndex]
            if (gcd(val, other) === 1)  continue

            const outcome = 1 + dp(1 + toIndex)
            result = Math.min(result, outcome)
        }

        return table[fromIndex] = result
    }


    let result = dp(0)
    if (result === Infinity)    result = -1
    return result
};
```