# 100% runtime

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/5561002/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/5561002/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1)
# Code
```
object Solution {
  def minOperations(nums: Array[Int], x: Int): Int = {
    val sum=nums.sum-x
    
    val max=nums.zipWithIndex.foldLeft(-1,0,0){
      case ((max,currSum,left),(num,idx))=>
        val (updatedLeft, updatedSum) = getMin(left,currSum+num,nums,idx,sum)
        val updatedMax=if(updatedSum == sum)Math.max(max,idx-updatedLeft+1) else max
        // println(s"num ${num} , updatedLeft ${updatedLeft} , updatedSum ${updatedSum} , updatedMax ${updatedMax} ")
        (updatedMax,updatedSum,updatedLeft)
    }._1
    if(max== -1)-1 else nums.length - max
  }
  
  private def getMin(left:Int, currSum:Int,nums:Array[Int] ,right:Int,target:Int):(Int,Int)={
    if(currSum > target && left <= right)
      getMin(left+1,currSum-nums(left),nums,right,target)
    else (left,currSum)
  }
}
```