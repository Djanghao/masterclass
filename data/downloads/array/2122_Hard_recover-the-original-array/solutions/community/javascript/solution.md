# Recover the Original Array

**Author:** Naeem_ABD
**Votes:** 0
**Link:** [https://leetcode.com/problems/recover-the-original-array/solutions/6107101/](https://leetcode.com/problems/recover-the-original-array/solutions/6107101/)

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
```javascript []
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var recoverArray = function (nums) {
    nums.sort((a, b) => (a - b));

    for (let i = 1; i <= nums.length / 2; i++) {
        let twiceK = nums[i] - nums[0];
        if (twiceK === 0 || twiceK % 2 === 1) continue;
        let result = [];
        let map = new Map();
        for (let num of nums) {
            let count = map.get(num - twiceK);
            if (!count) {
                map.set(num, (map.get(num) || 0) + 1);
            } else {
                result.push(num - twiceK / 2);
                map.set(num - twiceK, count - 1);
            }
        }
        if (result.length === nums.length / 2) {
            return result;
        }
    }

    return [];
};
```