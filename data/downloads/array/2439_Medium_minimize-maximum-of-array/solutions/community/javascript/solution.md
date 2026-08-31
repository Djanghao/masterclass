# Very easy solution || 100% explained || O(n) || Javascript || Python

**Author:** harshit_03
**Votes:** 41
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381500/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381500/)

---

# Intuition
- Intuition behind this is to be greedy and calculate the sum of each subarray and divide it by the length of the subarray and store the max result each time. 
- You ask me why? 
- Well lets say we have an array [3,7]. How many times we can perform the operation? Well lets count : In first operation we will have [4,6]. In second operation we will have [5,5]. well thats as far as we can go given the condition that we need to minimize the max sum.
- Now see this other way, if I took sum of [3,7] and divide it be length of subarray what we will get? Its 5 obviously, right? So keeping that in mind we will continue our implementation.

<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
- Lets initialize res and total with nums[0]. Why? because as per the operations given in the question set if we are on ith index and subtracting 1 from it then we must add that 1 to the preceding element i.e. i-1 element. So that's why.
- Also we will initialize the total with nums[0]. Why? Well its the same reason as above.
- Loop through the array starting from index 1 and calculate the total
- Finally calculate the result by taking max of result, total/length of subarray.  
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# JAVASCRIPT
```
/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let res = nums[0], total = nums[0]
    for(let i=1;i<nums.length;i++){
        total += nums[i]
        res = Math.max(res, Math.ceil(total/(i+1)))
    }
    return res
};
```
# PYTHON
```
class Solution:
    def minimizeArrayValue(self, nums: List[int]) -> int:
        res, total = nums[0], nums[0]
        for i in range(1, len(nums)):
            total += nums[i]
            res = max(res, math.ceil(total/(i+1)))
        return res
```
![upvote.png](./images/0.png)
