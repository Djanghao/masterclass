# O(n) time, O(1) space solution

**Author:** hriscuo
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/5212683/](https://leetcode.com/problems/divide-array-into-increasing-sequences/solutions/5212683/)

---

# Intuition
We don't necessarily have to simulate the partitions, we just have to make sure that the max number of repeating chars * k <= the length of the array.

# Approach
Count the max number of repeating chars. This is used in order to know the minimum number of partitions needed (if we have 3 occurences of `1`, then we have to have at least 3 partitions in order to satisfy the requirements).

After this, just check that with the number of partitions calculated before (noted as `max`), then the minimum size (k) * number of partitions (max) is less or equal than the total size of the array.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canDivideIntoSubsequences = function(nums, k) {
    let max = 0;
    let curr = 1;
    
    for (let i=1;i<nums.length;i++) {
        if (nums[i] === nums[i-1]) {
            curr++;
        } else {
            curr = 1;
        }

        max = Math.max(max, curr);
    }

    return k * max <= nums.length;
}
```