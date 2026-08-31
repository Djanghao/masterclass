# Clean JS Map and Reduce

**Author:** okarademirci
**Votes:** 17
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3232184/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3232184/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n) because of it generates a new array

# Code
```
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRigthDifference = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((sum,curr)=>sum += curr,0);

    return nums.map((curr,i)=>{
        //leftSum - (rightSum - curr)
        rightSum -= curr;
        let res = Math.abs(leftSum - rightSum );
        leftSum += curr;
        return res
    });
};
```