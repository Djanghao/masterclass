# scala imperative solution

**Author:** codecobra
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1868507/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/1868507/)

---

```
import scala.collection.mutable.Map

object Solution {
    def maxSubArrayLen(nums: Array[Int], k: Int): Int = {
        var idxMap = Map(0 -> -1)
        var sum = 0
        var longest = 0
        nums.zipWithIndex.foreach {
            case(num, idx) => {
                sum += num
				
				// Update the index map only if sum doesn't exist
                idxMap.getOrElseUpdate(sum, idx) 
				
				// if sum-k doesn't exist, map returns idx so it does count in the longest calculation
                longest = longest max (idx-idxMap.getOrElse(sum-k, idx) ) 
            }
        }
        longest
    }
}
```