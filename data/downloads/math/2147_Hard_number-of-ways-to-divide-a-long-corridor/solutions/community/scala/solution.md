# using Dp,

**Author:** aarushimaheshwari
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/6103064/](https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/solutions/6103064/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```scala []
import scala.collection.mutable
object Solution {
  def numberOfWays(corridor: String): Int = {
    val result=getCount(0, 0, corridor,mutable.Map.empty)
    result
  }


  val mod=Math.pow(10,9)+7
  private def getCount(idx: Int,seats: Int, corridor: String,memo:mutable.Map[(Int,Int),Int]): Int = {
    if (seats > 2) 0
    else if (idx == corridor.length && seats == 2) 1
    else if (idx == corridor.length) 0
    else if(memo.contains((idx,seats))) memo((idx,seats))
    else {
      val element = corridor.charAt(idx)
      val result= if (element == 'P') {
        if (seats == 2) ((getCount(idx + 1,  0, corridor,memo) + getCount(idx + 1, seats, corridor,memo))%mod).toInt
        else getCount(idx + 1,  seats, corridor,memo)
      }
      else {
        if (seats == 2)getCount(idx + 1, 1, corridor,memo) else getCount(idx + 1, seats + 1, corridor,memo)
      }
      memo((idx,seats))=(result%mod).toInt
      memo((idx,seats))
    }
  }
}
```