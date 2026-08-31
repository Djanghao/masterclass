# JavaScript O(n)

**Author:** lilongxue
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5643197/](https://leetcode.com/problems/bitwise-or-of-all-subsequence-sums/solutions/5643197/)

---

# Intuition
Use a prefix sum along with an ortion.
# Approach
Start with sum = 0, ortion = 0. For each val, sum += val, and ortion |= (val | sum).
At last, ortion is the result.
# Complexity
- Time complexity:
O(n)
- Space complexity:
O(1)
# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var subsequenceSumOr = function(nums) {
    let sumSF = 0n, ortionSF = 0n


    for (const val of nums) {
        const other = BigInt(val)
        sumSF += other
        ortionSF |= (other | sumSF)
    }


    const result = Number(ortionSF)
    return result
};
```