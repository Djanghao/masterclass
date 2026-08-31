# Javascript O(n) solution

**Author:** lm49
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2874642/](https://leetcode.com/problems/minimum-average-difference/solutions/2874642/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
For each calculation by index, we can separate `nums` into two sub-arrays: left-side and right-side. Making the sum of entire left and right sides is not needed, just substract from right and add to left.

# Approach
<!-- Describe your approach to solving the problem. -->
Use two variables to save the sum of each side. At first, left side sum is 0 and right side sum is sum(nums). On each iteration i, add nums[i] to the left and substract nums[i] to the right, then calculate absolute average and update answer.

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let nL=nums.length;
    let leftSum = 0;
    let rightSum = nums.reduce((p,n)=>{return p+n},0);

    let minimum = Infinity;
    let ans = Infinity;
    for (let i=0; i<nL; i++){
        leftSum += nums[i];
        rightSum -= nums[i];
        let res = Math.abs(Math.floor(((leftSum)/(i+1))) - Math.floor(((rightSum)/Math.max(1,(nL-1-i)))));
        if(res < minimum){
            minimum = res;
            ans = i;
        }
    }
    return ans;
};
```