# Sliding window approach

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/5213941/](https://leetcode.com/problems/maximize-the-confusion-of-an-exam/solutions/5213941/)

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
    def maxConsecutiveAnswers(s: String, k: Int): Int = {
        val mp = mutable.Map[Char, Int]('T' -> 0, 'F' -> 0)
        var i = 0
        var maxLen = 0

        for (j <- s.indices) {
            mp(s(j)) += 1

            while (Math.min(mp('T'), mp('F')) > k) {
                mp(s(i)) -= 1
                i += 1
            }

            maxLen = Math.max(maxLen, j - i + 1)
        }

        maxLen
    }
}
```