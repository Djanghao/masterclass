# scala solution 100%

**Author:** egssor
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6055734/](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/solutions/6055734/)

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
  def shortestSubarray(nums: Array[Int], k: Int): Int = {
    // \u0421\u043E\u0437\u0434\u0430\u0435\u043C \u043C\u0430\u0441\u0441\u0438\u0432 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043D\u044B\u0445 \u0441\u0443\u043C\u043C
    val prefixSums = new Array[Long](nums.length + 1)
    for (i <- nums.indices) {
      prefixSums(i + 1) = prefixSums(i) + nums(i)
    }

    val deque = mutable.ArrayDeque[Int]() // \u0414\u0435\u043A \u0434\u043B\u044F \u0445\u0440\u0430\u043D\u0435\u043D\u0438\u044F \u0438\u043D\u0434\u0435\u043A\u0441\u043E\u0432
    var minLength = Int.MaxValue          // \u0418\u0437\u043D\u0430\u0447\u0430\u043B\u044C\u043D\u043E \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0434\u043B\u0438\u043D\u0430 \u2014 \u0431\u0435\u0441\u043A\u043E\u043D\u0435\u0447\u043D\u043E\u0441\u0442\u044C

    for (i <- prefixSums.indices) {
      // \u0423\u0434\u0430\u043B\u044F\u0435\u043C \u0438\u0437 \u043D\u0430\u0447\u0430\u043B\u0430 \u0434\u0435\u043A\u0430 \u0438\u043D\u0434\u0435\u043A\u0441\u044B, \u0435\u0441\u043B\u0438 \u0441\u0443\u043C\u043C\u0430 \u043F\u043E\u0434\u043C\u0430\u0441\u0441\u0438\u0432\u0430 >= k
      while (deque.nonEmpty && prefixSums(i) - prefixSums(deque.head) >= k) {
        minLength = Math.min(minLength, i - deque.removeHead())
      }

      // \u0423\u0434\u0430\u043B\u044F\u0435\u043C \u0438\u0437 \u043A\u043E\u043D\u0446\u0430 \u0434\u0435\u043A\u0430 \u0438\u043D\u0434\u0435\u043A\u0441\u044B \u0441 \u043D\u0435\u043D\u0443\u0436\u043D\u044B\u043C\u0438 \u043F\u0440\u0435\u0444\u0438\u043A\u0441\u043D\u044B\u043C\u0438 \u0441\u0443\u043C\u043C\u0430\u043C\u0438
      while (deque.nonEmpty && prefixSums(i) <= prefixSums(deque.last)) {
        deque.removeLast()
      }

      // \u0414\u043E\u0431\u0430\u0432\u043B\u044F\u0435\u043C \u0442\u0435\u043A\u0443\u0449\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441 \u0432 \u0434\u0435\u043A
      deque.append(i)
    }

    // \u0412\u043E\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043C \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442
    if (minLength == Int.MaxValue) -1 else minLength
  }
}

```