# Single pass (kadane's algorithm)

**Author:** haque_jibon
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/5824620/](https://leetcode.com/problems/maximum-sum-circular-subarray/solutions/5824620/)

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
```typescript []
function maxSubarraySumCircular(nums: number[]): number {

    let totalSum=0,maxSum=nums[0], curMax =0,minSum=nums[0],curMin =0;

    for(let num of nums){
        curMax = Math.max(curMax+num,num)
        maxSum = Math.max(curMax,maxSum)
        curMin = Math.min(curMin+num,num)
        minSum = Math.min(curMin,minSum)
        totalSum+=num
    }

    return maxSum>0 ? Math.max(maxSum,totalSum-minSum):maxSum
    
};
```