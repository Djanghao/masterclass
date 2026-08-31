# Using Map

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5219086/](https://leetcode.com/problems/find-all-lonely-numbers-in-the-array/solutions/5219086/)

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
import scala.collection.mutable

object Solution {
  def findLonely(nums: Array[Int]): List[Int] = {
    val mp = mutable.Map[Int, Int]().withDefaultValue(0)

    for (num <- nums) {
      mp(num) += 1
    }

    val ans = mp.collect {
      case (num, freq) if mp.getOrElse(num - 1, 0) == 0 && mp.getOrElse(num + 1, 0) == 0 && freq == 1 => num
    }

    ans.toList
  }
}

```