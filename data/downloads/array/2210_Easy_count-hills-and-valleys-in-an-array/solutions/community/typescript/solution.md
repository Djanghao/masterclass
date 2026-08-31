# No Filter | Simple JS Solution | Beats 100% in JS

**Author:** Duuree
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5078007/](https://leetcode.com/problems/count-hills-and-valleys-in-an-array/solutions/5078007/)

---

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */

// If the both side is greater --> hill
// If the both side is smaller --> valley

var countHillValley = function(nums) {
  let result = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {

        let right_side = i + 1

        while (nums[i] == nums[right_side]) {
            right_side++
        }

        if ( (nums[i - 1] < nums[i] && nums[i] > nums[right_side]) || (nums[i - 1] > nums[i] && nums[i] < nums[right_side]) ) {
            result ++
        }
    }
  }  

  return result
};
```