# O(n) time complexity

**Author:** vermasuraj
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5822541/](https://leetcode.com/problems/longest-harmonious-subsequence/solutions/5822541/)

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
```scala []
import scala.collection.mutable
object Solution {
    def findLHS(nums: Array[Int]): Int = {
        var max = 0
        var map:mutable.Map[Int, Int] = mutable.Map.empty
        nums.foreach{x =>
            map.put(x , map.getOrElse(x,0) + 1)
        }
        map.foreach{case (key, value) =>
            if(map.contains(key+1))
                max = Math.max(max, value + map(key+1))
        }
        max
    }
}
```