# Best Approach

**Author:** adwxith
**Votes:** 5
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4613917/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/4613917/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)



# Code
```
var minimumCost = function(nums) {
 let min1=Infinity,min2=Infinity
 for(let i=1;i<nums.length;i++){
     if(nums[i]<min1){
         min2=min1
         min1=nums[i]
     }else if(nums[i]<min2){
         min2=nums[i]
     }
 }
 return nums[0]+min1+min2
};

```
\uD83D\uDE17If you found my solution helpful, I would appreciate a upvote to let me know!
