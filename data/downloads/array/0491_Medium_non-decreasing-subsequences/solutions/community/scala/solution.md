# Scala FP solution. Beats 100% runtime

**Author:** glususer
**Votes:** 0
**Link:** [https://leetcode.com/problems/non-decreasing-subsequences/solutions/3780976/](https://leetcode.com/problems/non-decreasing-subsequences/solutions/3780976/)

---

# Intuition
We need to start from every index and check till last of the array. This is a classic backtrack , take and skip problem.

# Approach
take the current num if it is greater then the previous number of the current list. Leave the current num and try next one

# Complexity
- Time complexity:
$$O(2^n * n)$$ --> 

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findSubsequences(nums: Array[Int]): List[List[Int]] = {
         val res = scala.collection.mutable.ListBuffer[List[Int]]()
  val set = scala.collection.mutable.Set[List[Int]]()

  def backtrack(i:Int, currList:List[Int]=List.empty):Unit={
    if(i>=nums.length ){
      if(currList.length >1 && !set.contains(currList)) {
        res += currList
        set += currList
      } else return
    }else{
      val last = currList.lastOption.getOrElse(Int.MinValue)
      if(last <= nums(i)) backtrack(i+1, currList:+nums(i))
      backtrack(i+1, currList)
    }
  }
  backtrack(0)
  res.toList
    }
}
```