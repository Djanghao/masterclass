# 100% beats runtime, memory

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/5382089/](https://leetcode.com/problems/wiggle-sort/solutions/5382089/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Greedy approach
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
  def wiggleSort(nums: Array[Int]): Unit = {
    nums.zipWithIndex.map{
      case(element, idx)=>
        if(idx!=nums.length-1){
          if((idx%2==0 && nums(idx)>nums(idx+1))||(idx%2==1 && nums(idx)<nums(idx+1)))
            swap(nums,idx,idx+1)
        }
        (element,idx)
    }
  }

  private def swap(nums:Array[Int],i:Int,j:Int)={
    val temp=nums(i)
    nums.update(i,nums(j))
    nums.update(j,temp)
  }
}
```