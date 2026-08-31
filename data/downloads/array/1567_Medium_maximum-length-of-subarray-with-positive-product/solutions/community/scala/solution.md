# Pattern matching easy solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/3123494/](https://leetcode.com/problems/maximum-length-of-subarray-with-positive-product/solutions/3123494/)

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
```
object Solution {
      def getMaxLen(nums: Array[Int]): Int = {
        var posCount, negCount = 0
        var res = 0
        nums.foreach(f=>{
          f match {
            case x if x > 0 => {
              posCount += 1
              negCount = if (negCount == 0) 0 else negCount+1
            }
            case x if x == 0 => {
              posCount = 0
              negCount = 0
            }
            case x if x < 0 => {
              val tmp = posCount
              posCount = if (negCount == 0) 0 else negCount+1
              negCount = tmp + 1
            } 
            }
          res = math.max(res,posCount)
          }
        )
        res
      }
}
```