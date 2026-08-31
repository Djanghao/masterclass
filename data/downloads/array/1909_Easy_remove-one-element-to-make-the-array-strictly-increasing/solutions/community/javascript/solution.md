# Beginner friendly [Java/JavaScript/Python] solution

**Author:** HimanshuBhoir
**Votes:** 16
**Link:** [https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1808440/](https://leetcode.com/problems/remove-one-element-to-make-the-array-strictly-increasing/solutions/1808440/)

---

**Time Complexity : O(n)**
**Java**
```
class Solution {
    public boolean canBeIncreasing(int[] nums) {
        int count = 0;
        for(int i=1; i<nums.length; i++){
            if(nums[i] <= nums[i-1]){ 
                count++;
                if(i>1 && nums[i] <= nums[i-2])  nums[i] = nums[i-1];                    
            }
        }
        return count <= 1;
    }
}
```
**JavaScript**
```
var canBeIncreasing = function(nums) {
    let count = 0
    for(let i=1; i<nums.length; i++){
        if(nums[i] <= nums[i-1]){
            count++;
            if(i>1 && nums[i] <= nums[i-2]) nums[i] = nums[i-1]
        }
    }
    return count <= 1
};
```
**Python**
```
class Solution(object):
    def canBeIncreasing(self, nums):
        count = 0
        for i in range(1, len(nums)):
            if nums[i] <= nums[i-1]:
                count += 1
                if i>1 and nums[i] <= nums[i-2]:
                    nums[i] = nums[i-1]
        return count <= 1
```