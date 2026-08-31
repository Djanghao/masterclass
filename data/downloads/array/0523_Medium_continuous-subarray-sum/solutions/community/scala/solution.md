# FP scala

**Author:** bobojon2ov
**Votes:** 2
**Link:** [https://leetcode.com/problems/continuous-subarray-sum/solutions/1758124/](https://leetcode.com/problems/continuous-subarray-sum/solutions/1758124/)

---

```
object Solution {
   def checkSubarraySum(nums: Array[Int], k: Int): Boolean = {
    def go(prefixSum: Int, i: Int, map: Map[Int, Int]): Boolean = {
      if (i == nums.length) false
      else {
        val sum = prefixSum + nums(i)
        val rem = sum % k
        if (rem == 0 && i > 0) true
        else if (map.contains(rem)){
          if (i - map(rem) >= 2) true else go(sum, i + 1, map)
        } else go(sum, i + 1, map + (rem -> i))
      }
    }
    go(0, 0, Map.empty[Int, Int])
  }
}
```