# Kotlin Backtracking - 100%

**Author:** sravan1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1621529/](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/solutions/1621529/)

---

```
class Solution {
    fun canPartitionKSubsets(nums: IntArray, k: Int): Boolean {
        val targetSum = nums.sum() / k
        val used = MutableList<Boolean>(nums.size){false}
        
        if(nums.sum() % k != 0)
            return false
     
      return backtrack(0,k,0,targetSum, used, nums)  
    }
    
    fun backtrack(i: Int, k: Int, subsetSum: Int,targetSum: Int, used: MutableList<Boolean>, nums: IntArray): Boolean{
        
        if(k == 0)
            return true
        
        if(subsetSum == targetSum)
            return backtrack(0, k -1, 0, targetSum, used, nums)
            
        for ( j in i until nums.size){
            if(used[j] || subsetSum + nums[j] > targetSum){
                continue
            }
            
            used[j] = true
            
            if(backtrack(j+1,k,subsetSum+ nums[j], targetSum, used, nums))
                return true
            
            used[j] = false
        }
        
        return false
        
    }
}