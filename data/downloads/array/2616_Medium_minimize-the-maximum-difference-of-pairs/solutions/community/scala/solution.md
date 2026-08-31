# beats 100% runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/5643188/](https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/solutions/5643188/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
o(nlogn)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
o(1)
# Code
```
object Solution {
  def minimizeMax(nums: Array[Int], p: Int): Int = {
    val sorted = nums.sorted
    getMin(0, sorted.last - sorted.head, sorted, p)
  }

  private def getMin(left: Int, right: Int, nums: Array[Int], p: Int): Int = {
    if (left >= right) left
    else {
      val mid = (left + right) / 2
      val pairs = countPairs(mid, nums,1,0)
      if (pairs < p)
        getMin(mid + 1, right, nums, p)
      else getMin(left, mid, nums, p)
    }
  }

  private def countPairs(threshold: Int, nums: Array[Int],idx:Int,count:Int):Int = {
   if(idx>=nums.length)count
   else{
     if(Math.abs(nums(idx)-nums(idx-1))<=threshold)
       countPairs(threshold, nums, idx+2, count+1)
     else countPairs(threshold, nums, idx+1, count)
   }
  }
}
```