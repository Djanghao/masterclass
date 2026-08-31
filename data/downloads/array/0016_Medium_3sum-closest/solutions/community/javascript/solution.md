# 💡JavaScript Solution

**Author:** AminiCK
**Votes:** 35
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/481580/](https://leetcode.com/problems/3sum-closest/solutions/481580/)

---

### The idea
1. Sort the input array
2. Use two pointers `left` & `right` to calculate a local sum, compare the target with the local sum
``` javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let closest = Infinity;
    for (let i=0;i<nums.length-2;i++) {
        let left = i+1; right = nums.length-1;
        while (left < right) {
            let localSum = nums[i] + nums[left] + nums[right];
            if (Math.abs(localSum - target) < Math.abs(closest - target)) closest = localSum;
            if (localSum > target) right--;
            else left++;
        }
    }
    return closest;
};
```