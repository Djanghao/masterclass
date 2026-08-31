# Scala daily solution

**Author:** egssor
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931200/](https://leetcode.com/problems/count-number-of-maximum-bitwise-or-subsets/solutions/5931200/)

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
  def countMaxOrSubsets(nums: Array[Int]): Int = {
    // \u0428\u0430\u0433 1: \u0412\u044B\u0447\u0438\u0441\u043B\u0435\u043D\u0438\u0435 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0433\u043E OR
    var maxOr = 0
    for (num <- nums) {
      maxOr |= num
    }

    // \u0428\u0430\u0433 2: \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0435\u043C mutable.Map \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F OR-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439 \u0438 \u0438\u0445 \u0441\u0447\u0435\u0442\u0447\u0438\u043A\u043E\u0432
    val prev = mutable.Map[Int, Int]()
    prev(0) = 1

    for (elem <- nums) {
      val current = mutable.Map[Int, Int]()
      
      // \u041F\u0440\u043E\u0445\u043E\u0434\u0438\u043C \u043F\u043E \u0432\u0441\u0435\u043C \u043F\u0440\u0435\u0434\u044B\u0434\u0443\u0449\u0438\u043C OR-\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F\u043C
      for ((prevOr, count) <- prev) {
        // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 OR \u0434\u043B\u044F \u043A\u0430\u0436\u0434\u043E\u0433\u043E \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430
        current(prevOr | elem) = current.getOrElse(prevOr | elem, 0) + count
      }
      
      // \u041E\u0431\u043D\u043E\u0432\u043B\u044F\u0435\u043C prev, \u0434\u043E\u0431\u0430\u0432\u043B\u044F\u044F \u043D\u043E\u0432\u044B\u0435 \u043A\u043E\u043C\u0431\u0438\u043D\u0430\u0446\u0438\u0438 OR
      for ((currentOr, count) <- current) {
        prev(currentOr) = prev.getOrElse(currentOr, 0) + count
      }
    }

    // \u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u043E\u0434\u043C\u043D\u043E\u0436\u0435\u0441\u0442\u0432, \u0434\u0430\u044E\u0449\u0438\u0445 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0439 OR
    prev.getOrElse(maxOr, 0)
  }
}
```