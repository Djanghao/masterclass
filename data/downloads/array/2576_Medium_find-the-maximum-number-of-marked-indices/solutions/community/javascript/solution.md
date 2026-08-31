# Greedy solution

**Author:** svolkovichs
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3233352/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3233352/)

---

# Intuition
We can sort an array and make a gridy solution here. 

# Approach
Sort the array. We can have up to N/2 index pairs. Check first N/2 smallest elements and try find min element from the second half so that condition will be valid.

# Complexity
- Time complexity:
O(N*Log(N))

- Space complexity:
O(1)

# Code
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxNumOfMarkedIndices = function(nums) {
   nums.sort((a,b) => a-b)
   let i = 0
   let end = Math.floor(nums.length / 2)
   let j = end
   let res = 0;
   while(i < end && j < nums.length){
       if(2*nums[i] <= nums[j]){
           res+=2
           i++
       }
       j++
   }

   return res
};

```