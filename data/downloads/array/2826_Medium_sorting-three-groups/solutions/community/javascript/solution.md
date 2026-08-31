# Sorting Three Groups

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-three-groups/solutions/6111461/](https://leetcode.com/problems/sorting-three-groups/solutions/6111461/)

---

# Intuition
Get the length of LIS, then return nums.length - LIS.length

# Approach
# Complexity
# Time complexity:
O(n)

# Space complexity:
O(1)
# Code
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    const len = nums.length
    const table = new Array(4).fill(0)


    for (const val of nums) {
        if (val === 1) {
            table[1]++
        } else if (val === 2) {
            table[2] = 1 + Math.max(table[1], table[2])
        } else {
            table[3] = 1 + Math.max(table[1], table[2], table[3])
        }
    }


    const best = Math.max(...table)
    const result = len - best
    return result
};
```