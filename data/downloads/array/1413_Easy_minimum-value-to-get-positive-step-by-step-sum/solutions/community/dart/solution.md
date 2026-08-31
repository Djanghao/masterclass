# simple solution

**Author:** Anurudhan
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/5969217/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/5969217/)

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
 * @return {number}
 */
var minStartValue = function(nums) {
    let arr=[]
    for(let i=0;i<nums.length;i++){
        arr.length==0?arr.push(nums[i]):arr.push(arr[i-1]+nums[i]);
    }
    arr.sort((a,b)=>a-b);
    if(arr[0] >=0) return 1
    else  return Math.abs(arr[0])+1
};
```