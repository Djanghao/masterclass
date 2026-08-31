# Easy to understand Greedy solution| Javascript | tc: O(n) | sc: O(1)

**Author:** aaryansinha16
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/3103020/](https://leetcode.com/problems/minimum-elements-to-add-to-form-a-given-sum/solutions/3103020/)

---

# Complexity
- Time complexity: $$O(N)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @param {number} limit
 * @param {number} goal
 * @return {number}
 */
var minElements = function(nums, limit, goal) {
    var sum = 0
    for(var i = 0; i<nums.length; i++) sum += nums[i]
    if(sum === goal) return 0
    var diff = Math.abs(goal - sum)

    if(diff <= limit) return 1

    if(diff % limit == 0) return diff/limit
    var ans = Math.floor(diff/limit) + 1
    return ans

};
```